import db from '../../../../db/db.config.js'
import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

const geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


const getRecentConversationRows = async (limit = 5) =>{
    const normalizedLimit = Number.parseInt(limit, 10);

    const safeLimit = Number.isNaN(normalizedLimit) || normalizedLimit <= 0 ? 20 : normalizedLimit;

    const [rows] = await db.execute(
        `SELECT id, role, content, craeted_at FROM conversations ORDER BY id DESC LIMIT ${safeLimit}`,
    );
    return rows.reverse();
}


// 
const generateAssistantAnswer = async({historyRows, question}) => {
    // Format history for gemini startChat
    const formattedHistory = historyRows.map(row => ({
        role: row.role ==='assistant' ? 'model' : 'user',
        parts: [{text: row.content }]
    }));
    // sample history format
    // [
    //     {
    //         role: 'user',
    //         parts: [{text: 'Hello, I\'m a user.'}],
    //     },
    //     {
    //         role: 'model',
    //         parts: [{text: 'Hello, I\'m a model.'}],
    //     },
    // ]


    const chat = geminiClient.chats.create({
        model: GEMINI_MODEL,
        config: {
            maxOutputTokens: 500,
        },
        history: formattedHistory
    });

    const result = await chat.sendMessage({ message: question});
    console.log(result.usageMetadata.totalTokenCount);

    return {
        text: result.text, 
        totalTokenCount: result.usageMetadata.totalTokenCount
    };
};

const getMessageById = async messageID => {
    const [rows] = await db.execute(
        'SELECT id, role, content, token_count, craeted_at FROM conversations WHERE id = ? LIMIT 1', [messageID],
    );

    if (!rows[0]) return null;
    return {
        id: rows[0].id,
        role: rows[0].role,
        content: rows[0].content,
        tokenCount: Number(rows[0].tokenCount || 0),
        createdAT: rows[0].craeted_at,
    };
}




export async function createConversationService(question) {
    try {
        if(!question.trim()){
            const error = new Error("Question is required");
            error.status = 400;
            throw error;
        }


// get recent convesations 
        const historyRows = await getRecentConversationRows(5);

         // save to database
    const [result] = await db.execute(
        'INSERT INTO conversations (content, role) VALUES (?, "user")', [ question,
        ]);


       const { text, totalTokenCount } = await generateAssistantAnswer({
         historyRows,
         question,
       });

        const [createAssistantMessageResult] = await db.execute(
          "INSERT INTO conversations (role, content, token_count) VALUES (?, ?, ?)",
          ['assistant', text, totalTokenCount ?? null],
        );


        const userConversation = await getMessageById(result.insertId);
        const assistantConversation = await getMessageById(createAssistantMessageResult.insertId);

        return {
            userConversation,
            assistantConversation,
        };

        // return `chat saved to db with question: ${question}`;
    } catch (error) {
        throw error;
    }
}
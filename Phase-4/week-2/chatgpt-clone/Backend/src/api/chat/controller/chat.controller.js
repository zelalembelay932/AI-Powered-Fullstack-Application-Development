import { createConversationService } from "../service/chat.service.js";



// to integrate gemini in console check quetion
// async function main(){
//     const response = await geminiClient.models.generateContent({
//     model: "gemini-3.5-flash-lite",
//     contents: "Explain how Express works in a few words",
//     });
//     console.log(response.text);
// } 

// // main();

export const createConversationController = async (req, res) => {
    try {
        const {question} = req.body
        const result = await createConversationService(question);
        res.status(201).json({
            success: true,
            message: 'Conversation posted successfully',
            data: result,
        });
    } catch (error) {
        throw error;
    }
};





export const getConversationController = async (req, res) => {
    try {
        res.send("get conversation api");
    } catch (error) {
        throw error;
    }
};



import { createConversationService, getRecentConversationRows } from "../service/chat.service.js";



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
    // req	Incoming HTTP request
    // res	HTTP response sent to frontend
    try {
        // use try to execute code that might produce an error.
        const {question} = req.body
        // This is JavaScript object destructuring.

                // const body = {
                //   question: "What is React?",
                // };
        const result = await createConversationService(question);

        res.status(201).json({ //sets the HTTP response status.
            // res.json() sends a JSON response back to the frontend.
            // Eg:-
                //             {
                //     "success": true,
                //     "message": "Conversation posted successfully",
                //     "data": {
                //         "userConversation": {
                //             "id": 1,
                //             "role": "user",
                //             "content": "What is React?"
                //         },
                //         "assistantConversation": {
                //             "id": 2,
                //             "role": "assistant",
                //             "content": "React is a JavaScript library..."
                //         }
                //     }
                // }
            success: true,
            message: 'Conversation posted successfully',
            data: result,
        });
    } catch (error) {
        throw error;
    }
    // If something fails, the error is thrown again.
};





export const getConversationController = async (req, res) => {
    try {
        const result = await getRecentConversationRows(100);//???
        // The number 100 is passed as an argument to the function. It tells the database service to retrieve up to 100 message records.
        res.status(200).json({
            // The backend sends the retrieved records back to React.
            success: true,
            message: 'Conversations fetched successfully',
            data: result,
        });
    } catch (error) {
        throw error;
    }
};



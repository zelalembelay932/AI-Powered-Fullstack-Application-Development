import express from "express";
import { createConversationController, getConversationController } from "./controller/chat.controller.js";

const chatRouter = express.Router();


//  /api/chat/conversations
chatRouter.post('/conversations', createConversationController);
// POST is an HTTP method used to submit data to the server.
        // Imagine user types
        // What is Python?
            // {
            //     "question": "What is Python?"
            // }

// The router passes the request to  createConversationController


chatRouter.get('/conversations', getConversationController);

// GET retrieves data from the server.
    // GET http://localhost:3001/api/chat/conversations

    // That controller retrieves recent conversation records from the database.



export default chatRouter;


// Endpoint 1 – Send a question
    // POST /api/chat/conversations
        // Used to send a question to Gemini and save the conversation.

// Endpoint 2 – Get chat history
    // GET /api/chat/conversations
        // Used to retrieve the recent messages stored in MySQL.








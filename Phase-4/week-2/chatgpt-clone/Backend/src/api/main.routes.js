import express from 'express'
import chatRouter from './chat/chat.routes.js';
// This router contains the endpoints that handle chat-related operations

const mainRouter = express.Router();
// express.Router() creates a separate routing object.

    // Think about it like dividing your application into different departments.

        // Main API
        //   |
        //   |-- Chat department
        //   |
        //   |-- Admin department
        //   |
        //   |-- User department
    // Each department can have its own routes.

//  /api/chat 
mainRouter.use('/chat', chatRouter);

//  /api/admin
// mainRouter.use('/admin', adminRouter)


// Remember that we already registered /api in index.js.
        // Therefore
            // /api + /chat = /api/chat
// This is called route composition.


export default mainRouter
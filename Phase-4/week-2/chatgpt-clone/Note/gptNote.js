
`
            Frontend (React)
                User writes a question and clicks Send
                
                ('HTTP POST request')

            Express.js => index.js
                Starts the server and registers middleware
            
            Main Router => main.routes.js
                Directs requests to the chat router

            Chat Router => chat.routes.js
                Selects the appropriate controller

            Chat Controller => chat.controller.js
                Receives and validates the HTTP request (validation is currently limited)

            Chat Service => chat.service.js
                Business logic, MySQL operations and Gemini integration 

            MySQL            Gemini API
Save and retrieve messages   Generate AI responses
                
                
            JSON response to React
Displays the user's question and Gemini's answer    
                
                `;




`
Backend/
│
├── index.js
│
├── db/
│   └── db.config.js
│
└── src/
    ├── api/
    │   ├── main.routes.js
    │   │
    │   └── chat/
    │       ├── chat.routes.js
    │       │
    │       ├── controller/
    │       │   └── chat.controller.js
    │       │
    │       └── service/
    │           └── chat.service.js
    │
    └── middleware/
        └── error-handler.js
`;




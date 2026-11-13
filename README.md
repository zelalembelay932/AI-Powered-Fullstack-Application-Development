# AI-Powered Full-Stack Application Development

![Learning Journey](https://img.shields.io/badge/Journey-Continuous%20Learning-blue)
![Frontend](https://img.shields.io/badge/Frontend-React%20%7C%20JavaScript-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)
![Database](https://img.shields.io/badge/Database-MySQL-lightgrey)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-8E75B2)

A practical record of my journey from web development fundamentals to full-stack application development and AI integration. This repository contains course exercises, technical notes, frontend recreations, backend development practice, database projects, React applications, API integrations, and complete project milestones.

The goal is to learn how to design, build, connect, and improve applications across the full stack—and then extend them with AI capabilities.

> **Latest milestone:** I have completed the core development of a ChatGPT-style AI assistant application using React, Node.js, Express, MySQL, and Google's Gemini API. The frontend and backend are connected, conversation records are stored in MySQL, and the assistant uses recent conversation history when generating answers. This is a learning project and MVP, not a claim that every feature of the commercial ChatGPT product has been reproduced.

## Table of contents

- [Learning journey](#learning-journey)
- [Featured projects](#featured-projects)
- [Project 1: AI ChatGPT Clone](#project-1-ai-chatgpt-clone)
- [Project 2: Netflix Clone](#project-2-netflix-clone)
- [Technology stack](#technology-stack)
- [Repository structure](#repository-structure)
- [Run the AI ChatGPT Clone](#run-the-ai-chatgpt-clone)
- [Run the Netflix Clone](#run-the-netflix-clone)
- [What I plan to learn next](#what-i-plan-to-learn-next)
- [Learning approach](#learning-approach)
- [Author](#author)
- [License](#license)

---

## Learning journey

The repository is organized into phases. Each phase builds on the concepts and skills practiced in the previous one.

### Phase 1 — Web development foundations

**Focus:** HTML, CSS, responsive design, and Bootstrap.

Topics and projects include:

- HTML5 structure and semantic elements.
- CSS selectors, layouts, Flexbox, and responsive design.
- Media queries and mobile-friendly layouts.
- Bootstrap components and grid system.
- Puppy landing page and Apple website recreations.
- Multi-page personal portfolio website.

Explore: [Phase-1](./Phase-1/)

### Phase 2 — JavaScript and browser interactions

**Focus:** Programming fundamentals and interactive websites.

Topics and exercises include:

- Variables, data types, operators, and expressions.
- Functions, conditions, loops, arrays, and objects.
- Problem-solving and JavaScript algorithms.
- DOM selection, manipulation, and event handling.
- Form validation.
- jQuery practice and browser interactions.

Explore: [Phase-2](./Phase-2/)

### Phase 3 — Backend development, databases, and React

**Focus:** Node.js, Express, MySQL, React, state management, routing, and APIs.

Topics and projects include:

- Node.js runtime, npm, core modules, CommonJS, and ES modules.
- Express servers, routes, middleware, and CORS.
- MySQL connections using `mysql2`, SQL queries, and relational tables.
- React functional components, props, and reusable UI.
- React state and hooks, including `useState` and `useEffect`.
- React Router, nested routes, and shared layouts.
- Fetch API and Axios.
- Apple-style React website and API integration exercises.

Selected projects:

- [MySQL Practice](./Phase-3/Week-16/MysqlPractice/)
- [React Apple Website](./Phase-3/Week-17/Apple%20React%20Functional%20Component/react-apple/)
- [EvangadiBooks React Practice](./Phase-3/Week-18/First_Video/EvangadiBooks/)
- [React State and Hooks Exercises](./Phase-3/Week-19/Practice%20Exercises/StatesAndHooksProject/)
- [Apple React API and Routing Project](./Phase-3/Week-20/ReactAPIandRouting/AppleYouTubeAPI/)
- [Express and MySQL Backend](./Phase-3/Week-20/ReactAPIandRouting/Backend/)

Explore: [Phase-3](./Phase-3/)

### Phase 4 — Full-stack and AI application projects

Phase 4 contains larger projects that bring together frontend development, backend services, databases, and external APIs.

- **Week 1:** Netflix-style movie browsing frontend using React and TMDB.
- **Week 2:** ChatGPT-style AI assistant using React, Express, MySQL, and Gemini.

---

## Featured projects

| Project | Main technologies | Project focus |
|---|---|---|
| Puppy and Apple website recreations | HTML, CSS, Bootstrap | Web design and responsive layouts |
| JavaScript exercises | JavaScript, DOM, jQuery | Programming logic and browser interactions |
| Backend and database exercises | Node.js, Express, MySQL | REST endpoints and relational data |
| Apple React project | React, Router, APIs | Component architecture and API integration |
| Netflix Clone | React, Vite, Axios, TMDB | Movie and TV catalogue interface |
| AI ChatGPT Clone | React, Express, MySQL, Gemini | Full-stack conversational AI application |

---

## Project 1: AI ChatGPT Clone

**Status: Core application implemented**

**Project directory:** [Phase-4/week-2/chatgpt-clone](./Phase-4/week-2/chatgpt-clone/)

This project is a ChatGPT-inspired programming assistant application. It connects a React frontend to an Express backend, uses Google's Gemini API to generate answers, and stores user and assistant messages in a MySQL database.

It demonstrates how a modern AI application can be organized into frontend components, API routes, controllers, services, an AI provider, and persistent storage.

### Main features implemented

- Chat-style dark user interface.
- React components for the sidebar, chat header, message list, individual messages, and chat input.
- Frontend-to-backend communication using Axios.
- Sending user questions to the backend.
- Generating assistant responses through Google's Gemini API.
- Saving user and assistant messages in MySQL.
- Loading recent conversation messages from the database when the application starts.
- Using recent conversation messages as context for subsequent Gemini responses.
- Loading indicator while the assistant is generating a response.
- Rendering assistant responses with React Markdown.
- Tracking Gemini token usage and storing it with assistant messages.
- Modular Express structure with routes, controllers, services, and centralized error middleware.
- Configurable Gemini model through the `GEMINI_MODEL` environment variable.

### Technology stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript, CSS Modules |
| UI components | Lucide React |
| Markdown rendering | React Markdown |
| HTTP client | Axios |
| Backend | Node.js, Express.js |
| Database | MySQL, `mysql2/promise` connection pool |
| AI provider | Google Gemini API |
| AI SDK | `@google/genai` |
| Configuration | dotenv and environment variables |

### Frontend architecture

The frontend is located inside the `Frontend` directory.

| Component / file | Responsibility |
|---|---|
| `App.jsx` | Holds conversation state, loads messages, sends questions to the API, handles loading state, and coordinates the main layout. |
| `Sidebar` | Displays the application's navigation area. |
| `ChatHeader` | Displays the application title and profile area. |
| `ChatInput` | Captures the user's question and submits it to the parent component. |
| `MessageList` | Renders the conversation and assistant loading indicator. |
| `ChatMessage` | Displays user messages and renders assistant responses as Markdown. |

### Backend architecture

The backend uses a modular structure to keep HTTP routing, request handling, business logic, database operations, and error responses separate.

```text
Backend/
├── db/
│   ├── db.config.js
│   └── schema.sql
│
├── src/
│   ├── api/
│   │   ├── main.routes.js
│   │   └── chat/
│   │       ├── chat.routes.js
│   │       ├── controller/
│   │       │   └── chat.controller.js
│   │       └── service/
│   │           └── chat.service.js
│   │
│   └── middleware/
│       └── error-handler.js
│
├── index.js
└── package.json
```

| Backend module | Responsibility |
|---|---|
| `index.js` | Loads configuration, creates the Express app, registers middleware and routes, verifies the database connection, and starts the server. |
| `db.config.js` | Creates a MySQL promise-based connection pool. |
| `main.routes.js` | Registers the API route groups. |
| `chat.routes.js` | Defines conversation endpoints. |
| `chat.controller.js` | Handles HTTP requests and sends JSON responses. |
| `chat.service.js` | Validates questions, reads conversation history, calls Gemini, and stores messages. |
| `error-handler.js` | Formats backend errors into JSON responses. |
| `schema.sql` | Defines the MySQL conversations table. |

### Conversation API

The backend currently exposes the following endpoints:

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/chat/conversations` | Accepts a question, generates a Gemini answer, and stores both messages. |
| `GET` | `/api/chat/conversations` | Returns the latest 100 message records from MySQL. |

Example request:

```http
POST http://localhost:3001/api/chat/conversations
Content-Type: application/json
```

```json
{
  "question": "Explain how React useEffect works."
}
```

The backend responds with a JSON object containing the saved user message and assistant response.

### How the AI conversation flow works

1. The user enters a question in the React chat input.
2. React sends the question to the Express API using Axios.
3. The chat controller receives the request and calls the chat service.
4. The service validates the question and retrieves up to five recent message records from MySQL.
5. Previous user and assistant messages are formatted as Gemini conversation history.
6. Gemini receives the history and the new question, then generates a response.
7. The backend stores the user's question and the assistant's response in MySQL.
8. The API returns the saved messages to React.
9. React displays the assistant response and scrolls toward the latest message.

The history limit of five refers to **five message records**, not five characters or necessarily five complete question-and-answer pairs.

### Gemini model configuration

The backend defines a list of Gemini model identifiers in `chat.service.js`. The active model is selected through the `GEMINI_MODEL` environment variable; when it is not set, the service uses the first model in its configured list.

The model identifiers currently listed in the source include:

- `gemini-3.8-flash`
- `gemini-3.7-flash`
- `gemini-3.6-flash`
- `gemini-3.5-flash`
- `gemini-3.5-flash-lite`
- `gemini-3.1-flash-lite`

Actual model access depends on availability and permissions for the Google AI project associated with the API key. The current frontend does not provide a model-selection dropdown; model selection is configured on the backend.

### Project scope

The project implements a core conversational AI workflow. It is not an official OpenAI or ChatGPT product, and it uses Google's Gemini API rather than the OpenAI API.

Advanced product features such as user registration, authentication, independent multi-user conversation management, editable chat titles, streaming responses, file uploads, RAG, and production deployment are potential future improvements rather than features claimed as completed here.

---

## Project 2: Netflix Clone

**Status: Main frontend project milestone completed**

**Project directory:** [Phase-4/week-1/netflix-clone](./Phase-4/week-1/netflix-clone/)

The Netflix Clone is a React and Vite frontend that uses The Movie Database (TMDB) API to display movie and TV-show catalogue information in a streaming-platform-inspired interface.

### Main components

| Component | Responsibility |
|---|---|
| `Header` | Navigation, expandable search input, notification icon, profile menu, and scroll-aware styling. |
| `Banner` | Fetches a featured title from TMDB and displays its backdrop, title, and description. |
| `DisplayRow` | Fetches movie and TV categories and passes results to slideshow components. |
| `SlideShow` | Displays horizontal, navigable movie rows using Swiper. |
| `MovieCard` | Displays posters and hover-style information panels. |
| `Footer` | Displays social icons and footer navigation links. |

### Main technologies

React, Vite, Axios, TMDB API, Swiper, CSS Modules, Lucide React, and React Icons.

This is a frontend learning project. It displays catalogue metadata and interface elements; it does not stream films or represent an official Netflix service.

---

## Technology stack

The repository contains projects and exercises using the following technologies. Not every project uses every technology.

| Development area | Technologies |
|---|---|
| Web foundations | HTML5, CSS3, Bootstrap, responsive design |
| Programming | JavaScript, ES6+, DOM, jQuery |
| Frontend | React, JSX, Hooks, React Router, Vite |
| Styling and UI | CSS Modules, Swiper, Lucide React, React Icons |
| Backend | Node.js, Express.js, REST APIs, middleware, CORS |
| Database | MySQL, SQL, `mysql2`, connection pooling |
| API integration | Fetch API, Axios, TMDB API, YouTube Data API exercises |
| AI integration | Google Gemini API, `@google/genai` |
| Development tools | npm, ESLint, Git, GitHub |

---

## Repository structure

```text
AI-Powered-Fullstack-Application-Development/
│
├── Evangadi Material/       # Supplementary learning materials
│
├── Phase-1/                 # HTML, CSS, Bootstrap, web foundations
│
├── Phase-2/                 # JavaScript, DOM, validation, jQuery
│
├── Phase-3/                 # Node.js, Express, MySQL, React, APIs
│
├── Phase-4/
│   ├── week-1/
│   │   ├── Resources/
│   │   └── netflix-clone/   # React + Vite + TMDB
│   │
│   └── week-2/
│       └── chatgpt-clone/
│           ├── Backend/     # Express + Gemini + MySQL
│           ├── Frontend/    # React chat interface
│           └── Note/        # Architecture and learning notes
│
├── LICENSE
└── README.md
```

Each project may have its own `package.json`. Install dependencies and run scripts from the relevant project directory rather than from the repository root.

---

## Run the AI ChatGPT Clone

The ChatGPT Clone contains separate frontend and backend applications. Run them in two terminal windows.

### Prerequisites

- Node.js and npm.
- MySQL Server.
- A Google Gemini API key.
- A MySQL database for conversation messages.

### 1. Clone the repository

```bash
git clone https://github.com/zelalembelay932/AI-Powered-Fullstack-Application-Development.git
cd AI-Powered-Fullstack-Application-Development
```

### 2. Create the MySQL database

Open MySQL Workbench or a MySQL terminal and create the database:

```sql
CREATE DATABASE chatgpt_clone;
```

Select the database and execute the SQL statements in:

`Phase-4/week-2/chatgpt-clone/Backend/db/schema.sql`

This creates the `conversations` table used by the backend.

**Schema note:** The current schema and service queries use the timestamp column name `craeted_at`. Keep that spelling consistent unless you rename it in both the schema and every related query.

### 3. Configure and install the backend

Open a terminal in the backend directory:

```bash
cd "Phase-4/week-2/chatgpt-clone/Backend"
npm install
```

Create a local `.env` file inside the Backend folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=chatgpt_clone

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.8-flash
```

Choose a model identifier that is available to your Google AI project.

### 4. Start the backend server

From the Backend directory:

```bash
npm start
```

The backend listens on:

`http://localhost:3001`

The server checks the MySQL connection before starting.

### 5. Install and start the frontend

Open a second terminal:

```bash
cd "AI-Powered-Fullstack-Application-Development/Phase-4/week-2/chatgpt-clone/Frontend"
npm install
npm run dev
```

Open the local development URL shown by Vite, usually:

`http://localhost:5173`

The frontend currently sends requests to the backend at `http://localhost:3001`.

### Security notes

- Never commit real `.env` files, database passwords, or API keys.
- Keep the Gemini API key in the backend environment, not in React or browser-visible variables.
- The current backend CORS configuration allows the local frontend origin `http://localhost:5173`; update it deliberately when deploying to another origin.
- Use a restricted database user instead of a root account for production deployments.

---

## Run the Netflix Clone

The Netflix Clone is a standalone Vite frontend.

### 1. Open the project directory

```bash
cd "Phase-4/week-1/netflix-clone"
npm install
```

### 2. Configure TMDB

Create a local `.env` file inside the Netflix Clone directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The app reads this value through `import.meta.env.VITE_TMDB_API_KEY`.

Vite variables prefixed with `VITE_` are exposed in the browser bundle. For production, consider proxying API requests through a backend and applying the API provider's key restrictions.

### 3. Start the frontend

```bash
npm run dev
```

Other available scripts:

```bash
npm run build
npm run preview
npm run lint
```

---

## What I plan to learn next

After completing the core ChatGPT Clone workflow, my next goal is to improve its architecture and explore more advanced AI engineering concepts.

Potential next milestones:

1. Add authentication and secure user accounts.
2. Organize conversations by user and conversation ID.
3. Add conversation titles, create-new-chat, rename, and delete functionality.
4. Explore streaming AI responses.
5. Add file uploads and document processing.
6. Learn embeddings and vector databases.
7. Build a Retrieval-Augmented Generation (RAG) application.
8. Explore AI agents and tool calling.
9. Add automated tests and improve API validation.
10. Containerize applications with Docker and learn CI/CD.
11. Deploy and monitor an application in a production environment.

These are future learning goals and are not presented as completed features of the current projects.

---

## Learning approach

I use this repository to preserve more than finished application code. It also contains practice exercises, study notes, code explanations, resources, and incremental development work.

My approach is to:

1. Study a concept and understand why it is used.
2. Practice it with small code examples.
3. Apply it in a real project or feature.
4. Debug problems and understand their causes.
5. Document important implementation decisions.
6. Track changes using Git commits and GitHub.
7. Refactor and improve projects as my skills grow.

The purpose of this repository is to demonstrate continuous learning through practical software development.

---

## Author

**Zelalem Belay** — Full-Stack Developer focused on WordPress, frontend development, backend systems, and AI-powered application development.

- GitHub: [@zelalembelay932](https://github.com/zelalembelay932)
- Portfolio: [zelalem.tech](https://zelalem.tech/)
- Repository: [AI-Powered-Fullstack-Application-Development](https://github.com/zelalembelay932/AI-Powered-Fullstack-Application-Development)

## License

This repository includes an MIT License. Some folders may contain third-party templates, images, libraries, or learning materials with their own licensing terms. Check the original terms before reusing third-party assets.

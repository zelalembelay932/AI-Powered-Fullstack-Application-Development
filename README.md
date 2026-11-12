# AI-Powered Full-Stack Application Development

![Learning Journey](https://img.shields.io/badge/Journey-Continuous%20Learning-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript%20%7C%20React-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)
![Database](https://img.shields.io/badge/Database-MySQL-lightgrey)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-8E75B2)

A practical record of my journey toward becoming a **full-stack developer focused on building AI-powered applications**. This repository contains course exercises, technical notes, frontend recreations, backend experiments, database practice, React applications, API integrations, and larger project milestones.

It is not one single finished application. It documents my progression from web development fundamentals to JavaScript, backend development, databases, React, external APIs, and AI integration.

> **Latest milestone:** I have started building a ChatGPT-style AI chat application. Its Express backend is integrated with Google's Gemini SDK and MySQL for generating and storing conversations. The React frontend foundation is in progress; the current committed interface contains the sidebar and chat header, while the message list, chat input, and frontend-to-backend integration are still planned.

## Table of contents

- [My learning journey](#my-learning-journey)
- [Featured projects](#featured-projects)
- [Phase 4: AI-powered ChatGPT Clone](#phase-4-ai-powered-chatgpt-clone)
- [Phase 4: Netflix Clone](#phase-4-netflix-clone)
- [Technology and tools](#technology-and-tools)
- [Repository structure](#repository-structure)
- [Run the ChatGPT Clone](#run-the-chatgpt-clone)
- [Run the Netflix Clone](#run-the-netflix-clone)
- [What I am learning next](#what-i-am-learning-next)
- [Learning approach](#learning-approach)
- [Author](#author)
- [License](#license)

## My learning journey

The repository is organized into phases. Each phase builds on concepts and projects from the previous one.

### Phase 1 — Web development foundations

**Focus:** HTML, CSS, page structure, responsive layouts, and Bootstrap.

I began by learning how websites are structured and styled, then applied those concepts through practical recreations and small projects.

Work in this phase includes:

- Puppy Project using HTML and CSS.
- Apple website recreations using HTML and CSS.
- Responsive layouts and media-query exercises.
- Apple-style layouts using Bootstrap.
- A multi-page portfolio website with About, Contact, Portfolio, Resume, and Services pages.

Explore: [Phase 1](./Phase-1/)

### Phase 2 — JavaScript and browser interactions

**Focus:** JavaScript fundamentals and interactive browser experiences.

Topics and exercises include:

- Variables, operators, functions, conditions, loops, and objects.
- JavaScript problem-solving and algorithm exercises.
- DOM selection and manipulation.
- Form validation and interactive forms.
- jQuery practice and responsive website behavior.

Explore: [Phase 2](./Phase-2/)

### Phase 3 — Backend development, databases, and React

**Focus:** Server-side JavaScript, database connectivity, reusable React components, application state, routing, and APIs.

My work includes:

- Node.js fundamentals, core modules, npm packages, CommonJS, and ES modules.
- Express.js servers, HTTP routes, middleware, and CORS.
- MySQL connections using `mysql2`, SQL queries, and relational table exercises.
- React functional components, props, reusable components, and component composition.
- React state and hooks, including `useState` and `useEffect`.
- React Router, nested routes, shared layouts, and not-found pages.
- API requests using Fetch and Axios.
- An Apple-style React website with page components and API exercises, including YouTube data integration.

Selected projects:

- [MySQL Practice](./Phase-3/Week-16/MysqlPractice/)
- [React Apple Website](./Phase-3/Week-17/Apple%20React%20Functional%20Component/react-apple/)
- [EvangadiBooks React Practice](./Phase-3/Week-18/First_Video/EvangadiBooks/)
- [React State and Hooks Exercises](./Phase-3/Week-19/Practice%20Exercises/StatesAndHooksProject/)
- [Apple React API and Routing Project](./Phase-3/Week-20/ReactAPIandRouting/AppleYouTubeAPI/)
- [Express and MySQL Backend](./Phase-3/Week-20/ReactAPIandRouting/Backend/)

Explore: [Phase 3](./Phase-3/)

## Phase 4: AI-powered ChatGPT Clone

**Project path:** [Phase-4/week-2/chatgpt-clone](./Phase-4/week-2/chatgpt-clone/)

This is my first AI-integrated application project in this learning repository. I am building a ChatGPT-inspired chat application with a React frontend and an Express backend that communicates with Google's Gemini model and stores conversation messages in MySQL.

The project is separated into two applications:

```text
chatgpt-clone/
├── Backend/
│   ├── db/
│   │   ├── db.config.js
│   │   └── schema.sql
│   ├── src/
│   │   ├── api/
│   │   │   ├── main.routes.js
│   │   │   └── chat/
│   │   │       ├── chat.routes.js
│   │   │       ├── controller/
│   │   │       │   └── chat.controller.js
│   │   │       └── service/
│   │   │           └── chat.service.js
│   │   └── middleware/
│   │       └── error-handler.js
│   ├── index.js
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Sidebar/
    │   │   └── ChatHeader/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

### Backend architecture and implemented features

The backend uses a modular structure that separates route definitions, controllers, business logic, database access, and error handling.

| Part | Responsibility |
|---|---|
| Express server | Starts the API on port `3001`, parses JSON requests, registers API routes, and uses centralized error handling. |
| Database connection | Uses a MySQL connection pool through `mysql2/promise`. |
| Chat routes | Defines the conversation creation and history endpoints. |
| Chat controller | Reads the incoming question, calls the service layer, and returns JSON responses. |
| Chat service | Validates the question, retrieves recent message history, calls Gemini, and stores user and assistant messages. |
| Gemini integration | Uses Google's `@google/genai` SDK to generate assistant responses. |
| Database schema | Stores message ID, role, content, token count, and creation timestamp in the `conversations` table. |
| Error middleware | Returns a consistent JSON error response when a request fails. |

### Current API endpoints

The backend currently defines these endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/chat/conversations` | Accepts a question, gets a Gemini response, and saves both user and assistant messages. |
| `GET` | `/api/chat/conversations` | Retrieves the latest 100 conversation message records from MySQL. |

Example request body for creating a conversation:

```json
{
  "question": "Explain how React useEffect works."
}
```

The chat service retrieves up to five recent message records to provide context to Gemini for the next response. This is a message-record limit, not a character limit and not necessarily five complete user-assistant exchanges.

### Frontend progress

The frontend is initialized with React and Vite. The current committed UI includes:

- **Sidebar:** Chat navigation layout with New Chat, Search Chat, Images, Apps, Deep Research, Codex, and Projects menu items.
- **ChatHeader:** Application title area and a profile avatar.
- **Application layout:** A main chat area prepared for the remaining chat components.
- **Styling:** Dark interface theme using CSS variables, CSS Modules, and Lucide React icons.

The following parts are planned or in progress and are **not yet implemented in the current committed frontend**:

- Message list and individual message components.
- Chat input and submit behavior.
- Axios service for communicating with the backend.
- Loading, error, and response states in the chat interface.
- Full frontend integration with the conversation API.

### AI conversation flow

The backend flow is currently designed as follows:

1. The client sends a question to the Express conversation endpoint.
2. The controller passes the question to the chat service.
3. The service validates the question and loads recent conversation records from MySQL.
4. The service formats the previous messages as Gemini chat history.
5. Gemini generates an assistant response.
6. The backend saves the user's question and the assistant's answer in MySQL.
7. The API returns both saved message records to the client.

This project currently uses Gemini as its AI provider. The project name is ChatGPT Clone because it recreates a ChatGPT-style interface and conversational workflow; it does not call the OpenAI API.

## Phase 4: Netflix Clone

**Project path:** [Phase-4/week-1/netflix-clone](./Phase-4/week-1/netflix-clone/)

The Netflix Clone is a React and Vite frontend that connects to The Movie Database (TMDB) API to display movie and TV-show metadata in a streaming-platform-inspired interface.

Its reusable components include:

| Component | Responsibility |
|---|---|
| `Header` | Navigation, expandable search input, notification icon, profile menu, and scroll-aware styling. |
| `Banner` | Fetches a featured title from TMDB and displays its backdrop, title, and shortened description. |
| `DisplayRow` | Fetches movie and TV categories and passes results to slideshow components. |
| `SlideShow` | Displays horizontal, navigable movie rows using Swiper. |
| `MovieCard` | Displays posters and hover-style information panels with visual action icons and metadata. |
| `Footer` | Displays social icons and footer navigation links. |

The API request configuration includes trending titles, Netflix Originals, top-rated movies, action, comedy, horror, romance, and documentary categories.

**Main technologies:** React, Vite, Axios, TMDB API, Swiper, CSS Modules, Lucide React, and React Icons.

This is a frontend learning project, not a streaming service or an official Netflix product. It displays catalogue metadata and interface elements; it does not stream films. Authentication, persistent watchlists, fully implemented search, and AI recommendations are future enhancements.

## Featured projects

| Project | What it demonstrates |
|---|---|
| Puppy Project | HTML structure, CSS styling, and responsive layout practice. |
| Apple website recreations | Multi-section layouts, responsive design, and Bootstrap. |
| Portfolio website | Multi-page website structure and frontend presentation. |
| JavaScript exercises | Programming fundamentals, algorithms, DOM manipulation, and form validation. |
| Node.js and MySQL exercises | Server setup, Express routes, SQL queries, and database connectivity. |
| React component projects | Reusable components, props, state, hooks, and component composition. |
| Apple React API and Routing | React pages, routing, shared layouts, and external API practice. |
| Netflix Clone | Movie-browsing frontend powered by TMDB data. |
| ChatGPT Clone | Gemini-powered conversational backend, MySQL message persistence, and a React chat interface foundation. |

## Technology and tools

The repository contains projects and exercises using the following technologies. Not every project uses every item.

| Area | Technologies |
|---|---|
| Frontend foundations | HTML5, CSS3, responsive design, Bootstrap, JavaScript, jQuery |
| Frontend applications | React, JSX, React Hooks, React Router, Vite, CSS Modules |
| Backend | Node.js, Express.js, REST APIs, middleware, CORS |
| Database | MySQL, SQL, `mysql2`, connection pooling |
| AI integration | Google Gemini API, `@google/genai` SDK |
| API integration | Fetch API, Axios, TMDB API, YouTube Data API exercises |
| UI and tooling | Swiper, Lucide React, React Icons, npm, ESLint, Git, and GitHub |

## Repository structure

```text
AI-Powered-Fullstack-Application-Development/
│
├── Evangadi Material/      # Supplementary course materials
├── Phase-1/                # HTML, CSS, Bootstrap, and web foundations
├── Phase-2/                # JavaScript, DOM, validation, and jQuery
├── Phase-3/                # Node.js, Express, MySQL, React, hooks, APIs, routing
├── Phase-4/
│   ├── week-1/
│   │   ├── Resources/
│   │   └── netflix-clone/  # React + Vite + TMDB
│   │
│   └── week-2/
│       └── chatgpt-clone/
│           ├── Backend/    # Express + Gemini + MySQL
│           └── Frontend/   # React + Vite chat UI
│
├── LICENSE
└── README.md
```

Each project may have its own `package.json`. Install dependencies and run commands from that project's directory rather than from the repository root.

## Run the ChatGPT Clone

The ChatGPT Clone has separate backend and frontend applications. Run them in two terminal windows.

### Prerequisites

- Node.js and npm.
- MySQL Server.
- A Google Gemini API key.
- A MySQL database for the chat messages.

### 1. Clone the repository

```bash
git clone https://github.com/zelalembelay932/AI-Powered-Fullstack-Application-Development.git
cd AI-Powered-Fullstack-Application-Development
```

### 2. Create the MySQL database and table

Create a database in MySQL:

```sql
CREATE DATABASE chatgpt_clone;
```

Select the database, then execute the SQL in:

`Phase-4/week-2/chatgpt-clone/Backend/db/schema.sql`

That schema creates the `conversations` table used by the backend.

### 3. Configure the backend environment

Open the backend folder:

```bash
cd "Phase-4/week-2/chatgpt-clone/Backend"
npm install
```

Create a local `.env` file in the Backend directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=chatgpt_clone

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.5-flash-lite
```

The current service code uses `gemini-3.5-flash-lite` as its default model when `GEMINI_MODEL` is not provided. Set the model to one available to your Google AI project.

Keep API keys and database credentials private. Never commit the real `.env` file to GitHub.

### 4. Start the backend

From the Backend directory, run:

```bash
node index.js
```

The server is configured to listen at:

`http://localhost:3001`

It checks the MySQL connection before starting the HTTP server.

### 5. Start the frontend

Open a second terminal window:

```bash
cd "AI-Powered-Fullstack-Application-Development/Phase-4/week-2/chatgpt-clone/Frontend"
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

**Current limitation:** The committed frontend is still a layout foundation. The backend API and Gemini integration are implemented, but the frontend message list, input component, and API connection are still part of the next development steps. Starting the frontend currently displays the existing sidebar and header rather than a complete working chat experience.

## Run the Netflix Clone

The Netflix Clone is a standalone Vite application.

### 1. Open the project

```bash
cd "Phase-4/week-1/netflix-clone"
npm install
```

### 2. Configure the TMDB API key

Create a local `.env` file in the Netflix Clone directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The project reads this value from `import.meta.env.VITE_TMDB_API_KEY` in `src/Utility/requestUrls.js`.

Vite variables prefixed with `VITE_` are exposed in the browser bundle. For production, consider proxying API requests through a backend and applying the provider's key restrictions.

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

## What I am learning next

My goal is to progress from conventional full-stack development to building reliable applications with useful AI capabilities.

My next development steps for the ChatGPT Clone include:

1. Complete the message list and individual message components.
2. Build the chat input component and handle user submissions.
3. Connect the React frontend to the Express API using Axios.
4. Display loading, response, and error states in the interface.
5. Improve conversation organization and persistence.
6. Add proper validation, authentication, and user-specific conversation history.
7. Explore additional AI capabilities such as streaming responses, structured outputs, and context-aware conversations.

For future projects, I also plan to study retrieval-augmented generation (RAG), embeddings, vector databases, AI agents, and production deployment practices.

These are learning and development goals; they should not be mistaken for features already implemented in this repository.

## Learning approach

I use this repository to keep more than finished project files. It also preserves practice exercises, study notes, code explanations, resources, and incremental development work.

My approach is to:

1. Learn a concept and write notes about how it works.
2. Practice it with small, focused exercises.
3. Apply it in a page, component, API integration, or backend service.
4. Debug and improve the implementation as my understanding grows.
5. Track progress through Git commits and GitHub version control.

This repository is continuously evolving as I learn, build, debug, and improve.

## Author

**Zelalem Belay** — Full-Stack Developer focused on WordPress, frontend development, backend systems, and AI-powered application development.

- GitHub: [@zelalembelay932](https://github.com/zelalembelay932)
- Portfolio: [zelalem.tech](https://zelalem.tech/)
- Repository: [AI-Powered-Fullstack-Application-Development](https://github.com/zelalembelay932/AI-Powered-Fullstack-Application-Development)

## License

This repository includes an MIT License. Some folders may also contain third-party templates, images, libraries, or learning materials that have their own licensing terms. Check those original terms before reusing third-party assets.

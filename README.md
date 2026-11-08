# AI-Powered Full-Stack Application Development

![Learning Journey](https://img.shields.io/badge/Journey-Continuous%20Learning-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript%20%7C%20React-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)
![Database](https://img.shields.io/badge/Database-MySQL-lightgrey)

A practical, evolving record of my journey toward becoming a **full-stack developer who can build AI-powered applications**. This repository brings together course exercises, study notes, frontend recreations, backend experiments, React applications, API integrations, and larger project milestones.

Rather than being one finished product, this repository documents how I am learning to design and build complete applications—from the browser interface to server-side logic, databases, external APIs, and eventually AI-powered features.

> **Current milestone:** I have completed a React-based Netflix-style frontend that retrieves movie and TV metadata from The Movie Database (TMDB) API. AI-powered recommendations are a future development goal; they are not implemented in the current codebase.

## Table of contents

- [My learning journey](#my-learning-journey)
- [Featured projects](#featured-projects)
- [Technology and tools](#technology-and-tools)
- [Repository structure](#repository-structure)
- [Run the Netflix Clone](#run-the-netflix-clone)
- [Backend and database practice](#backend-and-database-practice)
- [What I am learning next](#what-i-am-learning-next)
- [Learning approach](#learning-approach)
- [Author](#author)
- [License](#license)

## My learning journey

The repository is organized into phases. Each phase builds on the concepts and projects from the previous one.

### Phase 1 — Web development foundations

**Focus:** HTML, CSS, page structure, styling, responsive layouts, and Bootstrap.

I started by learning how websites are structured and styled, then applied those concepts through practical recreations and small projects.

Work in this phase includes:

- A Puppy Project using HTML and CSS.
- An Apple website recreation using HTML and CSS.
- Responsive layouts and media-query exercises.
- Apple-style layouts using Bootstrap.
- A multi-page portfolio website, including About, Contact, Portfolio, Resume, and Services pages.

Explore: [`Phase-1/`](./Phase-1/)

### Phase 2 — JavaScript and browser interactions

**Focus:** JavaScript fundamentals and making web pages interactive.

I progressed from basic programming concepts to DOM manipulation and browser-based behavior.

Topics and exercises include:

- Variables, operators, functions, conditions, loops, and objects.
- Problem-solving and JavaScript algorithm exercises.
- DOM selection and manipulation.
- Form validation and interactive forms.
- jQuery practice and responsive website behavior.

Explore: [`Phase-2/`](./Phase-2/)

### Phase 3 — Backend development, databases, and React

**Focus:** Server-side JavaScript, database connectivity, reusable React components, application state, routing, and APIs.

This phase marks my move from static and browser-focused projects toward applications with separate frontend and backend responsibilities.

My work includes:

- Node.js fundamentals, core modules, npm packages, CommonJS, and ES modules.
- Express.js servers, HTTP routes, middleware, and CORS.
- MySQL database connections using `mysql2`, SQL queries, and relational table exercises.
- React functional components, props, reusable components, and component composition.
- React state and hooks, including `useState` and `useEffect`.
- React Router concepts, nested routes, shared layouts, and not-found pages.
- API requests using Fetch and Axios.
- An Apple-style React website with page components and API exercises, including YouTube data integration.

Selected projects:

- [MySQL Practice](./Phase-3/Week-16/MysqlPractice/)
- [React Apple Website](./Phase-3/Week-17/Apple%20React%20Functional%20Component/react-apple/)
- [EvangadiBooks React Practice](./Phase-3/Week-18/First_Video/EvangadiBooks/)
- [React State and Hooks Exercises](./Phase-3/Week-19/Practice%20Exercises/StatesAndHooksProject/)
- [Apple React API and Routing Project](./Phase-3/Week-20/ReactAPIandRouting/AppleYouTubeAPI/)
- [Express and MySQL Backend](./Phase-3/Week-20/ReactAPIandRouting/Backend/)

Explore: [`Phase-3/`](./Phase-3/)

### Phase 4 — React project development: Netflix Clone

**Focus:** Building a larger React frontend, organizing components, using an external API, and creating a movie-browsing interface.

The Netflix Clone is the repository's main recent project milestone. It uses React and Vite and connects to TMDB for movie and TV-show metadata.

The application is divided into reusable UI components:

| Component | Responsibility |
|---|---|
| `Header` | Navigation, expandable search input, notification icon, profile menu, and scroll-aware header styling. |
| `Banner` | Requests a featured Netflix Original from TMDB and displays its backdrop, title, and shortened description. |
| `DisplayRow` | Requests movie and TV categories and passes the results to the slideshow components. |
| `SlideShow` | Displays a horizontal, navigable movie row using Swiper. |
| `MovieCard` | Displays a poster and a hover-style information panel with visual action icons and metadata. |
| `Footer` | Displays social icons and footer navigation links. |

The API request configuration includes endpoints for trending titles, Netflix Originals, top-rated movies, action, comedy, horror, romance, and documentaries. The current page renders selected categories as movie rows.

This is a **frontend learning project**, not a streaming service or an official Netflix product. It displays catalogue metadata and interface elements; it does not stream films. Features such as real account authentication, persistent watchlists, fully implemented search, and AI recommendations remain future work. Some visible buttons and menu items are currently UI demonstrations rather than complete product features.

**Main technologies:** React, Vite, Axios, TMDB API, Swiper, CSS Modules, Lucide React, and React Icons.

Explore: [`Phase-4/week-1/netflix-clone/`](./Phase-4/week-1/netflix-clone/)

## Featured projects

| Project | What it demonstrates |
|---|---|
| Puppy Project | HTML structure, CSS styling, and responsive layout practice. |
| Apple Website recreations | Rebuilding multi-section website layouts and practicing responsive design and Bootstrap. |
| Portfolio Website | Multi-page website structure and frontend presentation. |
| JavaScript exercises | Programming fundamentals, algorithms, DOM manipulation, and form validation. |
| Node.js and MySQL exercises | Server setup, Express routes, SQL queries, and database connectivity. |
| React component projects | Reusable components, props, state, hooks, and component composition. |
| Apple React API and Routing | React pages, routing, shared layouts, and external API practice. |
| Netflix Clone | A component-based movie-browsing interface powered by TMDB data. |

## Technology and tools

The repository contains exercises and projects using the following technologies. Not every project uses every item.

| Area | Technologies |
|---|---|
| Frontend foundations | HTML5, CSS3, responsive design, Bootstrap, JavaScript, jQuery |
| Frontend applications | React, JSX, React Hooks, React Router, Vite, CSS Modules |
| Backend | Node.js, Express.js, REST-style endpoints, middleware, CORS |
| Database | MySQL, SQL, `mysql2` |
| API integration | Fetch API, Axios, TMDB API, YouTube Data API exercises |
| UI and tooling | Swiper, Lucide React, React Icons, npm, ESLint, Git, and GitHub |

## Repository structure

```text
AI-Powered-Fullstack-Application-Development/
│
├── Evangadi Material/     # Supplementary course materials
├── Phase-1/               # HTML, CSS, Bootstrap, and web foundations
├── Phase-2/               # JavaScript, DOM, validation, and jQuery
├── Phase-3/               # Node.js, Express, MySQL, React, hooks, APIs, routing
├── Phase-4/               # Larger React application projects
│   └── week-1/
│       ├── Resources/     # Design references, API notes, and project assets
│       └── netflix-clone/ # React + Vite Netflix-style frontend
├── LICENSE
└── README.md
```

Each phase contains separate weekly exercises and project folders. Some projects have their own `package.json`, which means their dependencies and run commands are managed independently.

## Run the Netflix Clone

The Netflix Clone is a standalone Vite application inside `Phase-4/week-1/netflix-clone`.

### Prerequisites

- Node.js and npm installed.
- A TMDB API key for retrieving movie and TV-show metadata.

### 1. Clone the repository

```bash
git clone https://github.com/zelalembelay932/AI-Powered-Fullstack-Application-Development.git
cd AI-Powered-Fullstack-Application-Development
```

### 2. Move into the Netflix Clone project

```bash
cd "Phase-4/week-1/netflix-clone"
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the TMDB API key

Create a local `.env` file inside the `netflix-clone` folder:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The project reads this value through `import.meta.env.VITE_TMDB_API_KEY` in `src/Utility/requestUrls.js`.

Do not commit your real `.env` file or API credentials. Vite variables prefixed with `VITE_` are included in the browser bundle, so this key is visible to users of the frontend. For production systems, consider proxying API requests through a backend and applying the API provider's key restrictions.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal (usually `http://localhost:5173`).

### Other available scripts

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

**Important:** There is no single root-level application to start. Navigate into the relevant project directory before running `npm install` or an npm script.

## Backend and database practice

Backend exercises are also maintained as separate projects. For example, the Phase 3 work includes Express applications that read database settings from environment variables and connect to MySQL with `mysql2`.

The Week 20 backend exercise exposes a product endpoint at `/iphone`, which queries MySQL product, description, and pricing tables and returns JSON for a frontend to consume.

To explore a backend exercise, open its folder and read its `package.json` and source files first. You will need a local MySQL server, a database with the expected tables, and a local `.env` file containing the appropriate database configuration. Never reuse credentials from a public repository.

## What I am learning next

My longer-term goal is to move from conventional full-stack applications toward applications that use AI meaningfully and responsibly.

The repository's future-integration notes identify ideas such as:

- User sign-up, sign-in, and authentication.
- Movie suggestions based on titles a user likes.

The next stages of my learning path are to strengthen backend architecture and database design, build secure authentication and API layers, and then explore AI-powered recommendation features. Possible approaches include recommendation logic based on user preferences and, where appropriate, integrating an AI model or language-model API. These are planned learning goals, not completed features of the current Netflix Clone.

## Learning approach

I use this repository to keep more than final project files. It also preserves practice exercises, notes, code explanations, resources, and incremental development work.

My approach is to:

1. Learn a concept and write notes about how it works.
2. Practice it with small, focused exercises.
3. Apply it in a page, component, API integration, or backend exercise.
4. Refactor and improve the project as my understanding grows.
5. Track progress with Git commits and GitHub version control.

This repository is continuously evolving as I learn, build, debug, and improve.

## Author

**Zelalem Belay** — Full-Stack Developer focused on WordPress, frontend development, backend systems, and AI-powered application development.

- GitHub: [@zelalembelay932](https://github.com/zelalembelay932)
- Portfolio: [zelalem.tech](https://zelalem.tech/)
- Repository: [AI-Powered-Fullstack-Application-Development](https://github.com/zelalembelay932/AI-Powered-Fullstack-Application-Development)

## License

The repository includes an MIT License. Some folders may also contain third-party templates, images, libraries, or learning materials that have their own licensing terms. Check those original terms before reusing third-party assets.

# Giphy App

A GIF search and discovery app built with React 18 and the [GIPHY API](https://developers.giphy.com/docs/api#quick-start-guide). Search any keyword, browse trending GIFs, save your favorites, and explore curated categories — all wrapped in a dark OLED design system.

**Live:** [giphy-pino.vercel.app](https://giphy-pino.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build tool | Vite 8 (Rolldown + Oxc) |
| Routing | Wouter |
| Forms | React Hook Form |
| Testing | Vitest + Testing Library |
| Styling | Plain CSS + CSS custom properties |
| Auth | JWT via sessionStorage |
| Backend | Node/Express on Heroku |
| Database | MongoDB Atlas |
| Hosting | Vercel |

---

## Features

- **GIF search** — search by keyword with content rating filter (G, PG, PG-13, R)
- **Infinite scroll** — loads more results automatically using IntersectionObserver
- **Trending GIFs** — homepage shows trending content from GIPHY
- **Trending searches** — live sidebar of popular search terms
- **Favorites** — save and remove GIFs (requires login)
- **Auth** — register and login with JWT-based session
- **GIF detail** — dedicated page for each GIF
- **Code splitting** — all pages are lazy-loaded via `React.lazy()`

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [GIPHY API key](https://developers.giphy.com/dashboard/)
- A running instance of the backend API

### Installation

```bash
git clone https://github.com/MonkeyDPino/giphy-app.git
cd giphy-app
npm install
```

### Environment Variables

Create a `.env` file at the root:

```env
VITE_API_KEY=your_giphy_api_key
VITE_ENDPOINT=https://your-backend-url.com
```

> Vite exposes only variables prefixed with `VITE_` to the client via `import.meta.env`.

### Run

```bash
npm run dev       # Dev server at http://localhost:5173
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run tests once (CI mode) |
| `npm run deploy` | Run tests + deploy to Vercel |

---

## Architecture

```
src/
├── components/     # Reusable UI components (each with paired .css)
├── pages/          # Route-level components (lazy-loaded)
├── hooks/          # All async/state logic (useGifs, useUser, etc.)
├── services/       # Raw fetch() calls to GIPHY API and backend
└── context/        # Global state — UserContext (auth + favorites)
```

### Key Patterns

- **Service layer** — all API calls go through `src/services/`. No fetch calls inside components.
- **Custom hooks** — business logic lives in hooks; components stay purely presentational.
- **Infinite scroll** — `useNearScreen` (IntersectionObserver) + `just-throttle` triggers pagination in `useGifs`.
- **Auth** — JWT stored in `sessionStorage`. `useUser` handles login, logout, and favorites. `UserContext` exposes user state globally.
- **Memoization** — components are wrapped with `React.memo` by default.
- **Modal pattern** — rendered via `ReactDOM.createPortal` into `#modal-root`.

### Routes

| Path | Page |
|------|------|
| `/` | Home — trending GIFs |
| `/login` | Login |
| `/register` | Register |
| `/search/:keyword/:rating?` | Search results |
| `/gif/:id` | GIF detail |

### State Storage

| Storage | Data |
|---------|------|
| `sessionStorage` | JWT token |
| `localStorage` | Last search keyword |

---

## Design System

Dark OLED theme with violet and pink accents. All tokens live in `src/index.css` as CSS custom properties.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#0A0A0F` | Page background |
| `--accent` | `#8B5CF6` | Primary violet |
| `--accent-pink` | `#EC4899` | Secondary pink |
| `--text-primary` | `#F1F5F9` | Body text |
| Heading font | Righteous | Titles, wordmark |
| Body font | Poppins | All other text |

---

## License

MIT

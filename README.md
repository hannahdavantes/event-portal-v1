# Event Portal (Event-Portal-v1)

Simple full-stack events app — React + Vite front-end and Express + MongoDB server. This README explains how to install, configure environment variables, and run the project locally (development). The repo includes separate client and server folders; the root `npm run dev` command runs both concurrently.

## Prerequisites

- Node.js (recommend v18+)
- npm (bundled with Node) or an alternative package manager
- A running MongoDB instance (Atlas or local) and Cloudinary account for image upload

## Quick start (recommended)

1. Clone the repo:

   git clone <repo-url>
   cd event-portal-v1

2. Install root, client and server dependencies:

   # install root deps (concurrently) and extras

   npm install

   # install client deps

   cd client
   npm install
   cd ../server
   npm install
   cd ..

3. Copy the server environment config and fill values (see `server/.env.example`):

   cp server/.env.example server/.env

   Fill in values for:

   - MONGO_URL (MongoDB connection string)
   - CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET (Cloudinary)
   - JWT_SECRET, JWT_EXPIRES_IN (JWT config)
   - EMAIL_USER, GOOGLE_APP_PASSWORD (for sending emails via Gmail)

4. Start both server and client concurrently from the repo root:

   npm run dev

   - Client will run (Vite) on the default Vite port (usually http://localhost:5173)
   - Server will run on port 5100 by default (http://localhost:5100)

Alternatively run the server and client individually in separate terminals:

# Server

cd server
npm run dev

# Client

cd client
npm run dev

## Development details

- The client uses axios with baseURL `/api/v1` and Vite dev server proxy (see `client/vite.config.js`) which proxies `/api` to `http://localhost:5100/api`, so running both concurrently keeps API calls working without CORS configuration.
- The server expects environment variables (see `server/.env.example`), and uses `nodemon` during development.

## Environment variables (server)

Create `server/.env` from `server/.env.example`. The server expects the following variables:

- MONGO_URL — MongoDB connection string (required)
- CLOUD_NAME — Cloudinary cloud name (required for uploads)
- CLOUD_API_KEY — Cloudinary API key
- CLOUD_API_SECRET — Cloudinary API secret
- JWT_SECRET — JSON Web Token secret
- JWT_EXPIRES_IN — token expiry (e.g., "1d")
- EMAIL_USER — sender Gmail address used for nodemailer
- GOOGLE_APP_PASSWORD — Gmail app password for SMTP
- PORT — optional (defaults to 5100)
- NODE_ENV — optional (development/production)

## Where to look

- Client source: `client/src`
- Server source: `server/`
- Global CSS variables: `client/src/index.css`
- Reusable styled wrappers in `client/src/assets/wrappers/`

## Troubleshooting

- If the client can't reach the API, ensure the server is running on port 5100 or update `client/vite.config.js` proxy target.
- If Mongo connection fails, verify `MONGO_URL` and network access (Atlas IP whitelist or local Mongo running).
- If images fail to upload, validate Cloudinary credentials.
- For email issues, confirm `EMAIL_USER` and `GOOGLE_APP_PASSWORD` are valid and Gmail account allows app passwords.

## Notes

- The project uses `concurrently` at the repo root to run both services for development.
- For production you can build the client (`cd client && npm run build`) and serve static assets with any static host or integrate the built assets into Express if desired.

---

If you want I can:

- add `server/.env.example` (I can add it now),
- add a `Makefile` or helpful npm scripts to streamline setup,
- or add a short troubleshooting checklist for common environment problems.

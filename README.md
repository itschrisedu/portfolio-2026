# Christopher Paucar — Web Developer Portfolio

![Portfolio Preview](./public/meta/preview.png)

A personal portfolio website showcasing interactive web experiences, high-performance animations, and lightweight 3D/shader demos. Designed and developed by **Christopher Paucar**, specialized in WebGL, Node.js, and modern front-end technologies.

---

## 🚀 Key Features

- **Dynamic WebGL & 3D Scenes**: Integrated **Three.js** with custom GLSL shaders compiled via `vite-plugin-glsl`.
- **Fluid Motion & Scroll**: Immersive animation sequences driven by **GSAP** and smooth scroll powered by **Lenis**.
- **Bilingual Copy**: Native multi-language support (English and Spanish) with state persistence.
- **Interactive Audio**: Immersive user experience with responsive hover and click sound effects powered by **Howler.js**.
- **SMTP Contact API**: Integrated modal contact form backed by a custom Nodemailer handler (`/api/contact`).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styles**: [Sass / SCSS](https://sass-lang.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Lenis](https://lenis.darkroom.engineering/)
- **3D Graphics**: [Three.js](https://threejs.org/) (GLSL Shaders)
- **Audio**: [Howler.js](https://howlerjs.com/)

### Backend / Serverless
- **Runtime**: [Node.js](https://nodejs.org/)
- **Mail Service**: [Nodemailer](https://nodemailer.com/)

---

## 📂 Project Structure

```text
├── api/                  # Backend / API routes (e.g., contact form handler)
├── public/               # Static assets (fonts, icons, pre-rendered media)
├── src/
│   ├── assets/           # Global styles, SCSS variables & mixins
│   ├── components/       # Reusable Vue UI components (buttons, modals, layouts)
│   ├── content/          # Portfolio data & copy
│   │   └── projects/     # Project metadata and detail copies (EN & ES)
│   ├── features/         # Feature-specific components (Home, Projects showcases)
│   ├── i18n/             # Multi-language configuration and composables
│   ├── three/            # WebGL, shaders, and 3D scene controllers
│   ├── utils/            # Helper utilities and feature flags
│   ├── App.vue           # Root component
│   └── main.ts           # Entry point
```

---

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory based on the `.env.example` file:
```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_SHOW_ATTRIBUTION` | Toggle attribution reference in footer | `true` |
| `VITE_CONTACT_API_URL` | Endpoint for the contact form | `/api/contact` |
| `VITE_CONTACT_EMAIL` | Display email address for manual contact | `you@example.com` |
| `SMTP_HOST` | Outgoing mail server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | Outgoing mail server port | `465` |
| `SMTP_SECURE` | Use SSL/TLS | `true` |
| `SMTP_USER` | SMTP username | `you@example.com` |
| `SMTP_PASS` | SMTP password / App Password | `your_app_password` |
| `MAIL_FROM` | Sender address header | `you@example.com` |
| `MAIL_TO` | Recipient address for forms | `you@example.com` |

### 3. Run Locally
Start the development server:
```bash
npm run dev
```
The server will start on [http://localhost:3000](http://localhost:3000) (using `strictPort`).

### 4. Build for Production
To generate a production-ready build:
```bash
npm run build
```
This runs TypeScript checking (`vue-tsc`) and builds the distribution assets into the `dist/` directory.

### 5. Preview the Build
To run the production build locally:
```bash
npm run preview
```

---

## 📄 Credits & Attribution

This project is created and designed by **Christopher Paucar**.

If you use this project or substantial parts of its source code as a template or reference for your own portfolio/website, **attribution must be preserved**.

Please ensure that you:
1. Retain the existing credit comments in the source code.
2. Keep this attribution section in your project's `README.md`.
3. Include a visible reference/link back to this original repository in your derivative work.

*Original design concept and portfolio inspiration derived from:*
- [david-hckh.com](https://david-hckh.com)

*Commercial reuse or redistribution of substantial portions of this project without explicit permission is prohibited.*

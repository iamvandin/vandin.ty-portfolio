# IT Support / DevOps Portfolio

A single-page portfolio built with React, Vite and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Customize

- **Your name**: set the `NAME` constant at the top of `src/App.jsx`.
- **Contact links**: edit the `channels` array in `src/components/Contact.jsx`
  (LinkedIn, GitHub, email, Upwork URLs).
- **Projects**: edit the `projects` array in `src/components/Projects.jsx`.
  Add a real `href` for each project (repo link, live demo, or write-up).
- **Services**: edit the `services` array in `src/components/Services.jsx`.
- **About**: edit the copy directly in `src/components/About.jsx`.
- **Colors and fonts**: defined as design tokens in `tailwind.config.js`
  (`accent`, `bg`, `surface`, etc.) and loaded in `index.html` (IBM Plex Mono /
  IBM Plex Sans via Google Fonts).

## Structure

```
src/
  App.jsx              — page layout, name config
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
    icons.jsx          — inline SVG icons (no icon library dependency)
```

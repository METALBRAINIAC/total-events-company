# Total Event Co. — Website

A starter website for **Total Event Co.**, an event planning, styling, live shows, sound and
lighting company based in Papua New Guinea. This is a first, basic version built to be easy to
extend as real photos, copy, and contact details become available.

Built with **React + Vite + TypeScript + Tailwind CSS + React Router + Lucide React icons**.

---

## 1. Running the project locally

You need [Node.js](https://nodejs.org/) (version 18 or later) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 2. Connecting this project to your GitHub repository

This project isn't linked to a GitHub repo yet. Once you have your repo URL, run:

```bash
git init                                   # only if this folder isn't already a git repo
git add .
git commit -m "Initial commit: Total Event Co. website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL_HERE
git push -u origin main
```

There's also a placeholder for your repo URL in **`package.json`**, under the `"repository"`
field — update it to match:

```json
"repository": {
  "type": "git",
  "url": "PASTE_YOUR_GITHUB_REPO_URL_HERE"
}
```

### Running it on GitHub (GitHub Pages)

This is a React/Vite/TypeScript project, so the `index.html` at the project root is a **build
entry point** — it loads TypeScript source files that browsers can't run directly, so it needs to
be built first (`npm run build`, which outputs a plain HTML/JS/CSS site into `dist/`).

To make this happen automatically whenever you push, a GitHub Actions workflow is already
included at `.github/workflows/deploy.yml`. It builds the project and publishes the `dist/`
output to GitHub Pages for you — no manual build step needed. To turn it on:

1. Push this project to your GitHub repo (see the `git` commands above).
2. In your repo on GitHub, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to **GitHub Actions**.
4. Push to the `main` branch (or re-run the workflow from the **Actions** tab) — the site will
   build and deploy automatically, and GitHub will show you the live URL.

If you'd rather deploy elsewhere (Vercel, Netlify, etc.), those platforms can connect directly to
the GitHub repo and will auto-build using `npm run build` — the included workflow is only needed
for GitHub Pages specifically.

---

## 3. Where to edit things later

| What you want to change            | Where to edit it |
|-------------------------------------|-------------------|
| Logo                                 | `src/components/Logo.tsx` — see the instructions in that file's comments for swapping in an image file |
| Phone, email, address, social links  | `src/data/siteConfig.ts` |
| Service names & descriptions         | `src/data/siteConfig.ts` (`services` array) |
| Gallery categories                   | `src/data/siteConfig.ts` (`galleryCategories` array) |
| Home page hero text & buttons        | `src/pages/Home.tsx` |
| About page content                   | `src/pages/About.tsx` |
| Booking form fields                  | `src/pages/BookEvent.tsx` |
| Colours (red / black / white theme)  | `tailwind.config.js` (`brand` colours) |
| Page titles / SEO description        | `index.html` (`<title>`, `<meta name="description">`, etc.) |

### Adding real photos
- Drop image files into `src/assets/` (a `src/assets/gallery/` folder is already set up for
  gallery photos).
- Import them at the top of the relevant component, e.g.:
  ```tsx
  import weddingPhoto from '../assets/gallery/wedding-1.jpg'
  ```
- Replace the "Photo placeholder" blocks in `src/components/GalleryCard.tsx` and
  `src/components/ServiceCard.tsx` with real `<img>` tags — each component has comments showing
  exactly how.

### Logo
The real logo is already in place at `src/assets/logo.png`, used via `src/components/Logo.tsx`.
Since the logo's "TOTAL EVENT CO." text is solid black on a transparent background, it's shown on
a small white rounded backing so it stays legible against the site's dark background — if you
later get a white/reversed version of the logo, you can simplify `Logo.tsx` back to a plain
`<img>` tag (the file has a comment marking exactly where).

### Connecting the booking form
`src/pages/BookEvent.tsx` currently only shows an on-screen confirmation message — it does not
send data anywhere. When you're ready, replace the `handleSubmit` function with a real
integration (a form service like Formspree/EmailJS, or your own backend/API endpoint).

---

## 4. What's intentionally NOT included yet

As requested, this starter version does **not** include:
- Payment functionality
- A database
- Login / authentication
- Real company claims, client names, event history, awards, prices, or statistics — every piece
  of business-specific text is a clearly marked placeholder

---

## 5. Project structure

```
total-event-co/
├── .github/workflows/deploy.yml   ← auto-builds & deploys to GitHub Pages
├── index.html
├── package.json
├── tailwind.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── assets/
│   │   └── logo.png       ← real logo
│   │   └── gallery/        ← put real photos here
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── PageHero.tsx
│   │   ├── ServiceCard.tsx
│   │   └── GalleryCard.tsx
│   ├── data/
│   │   └── siteConfig.ts  ← most editable content lives here
│   └── pages/
│       ├── Home.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Gallery.tsx
│       ├── BookEvent.tsx
│       └── Contact.tsx
```

# 💻 Portfolio Website – Tal Peretz

This is the repository for my personal **portfolio website**, built using **HTML, CSS, and JavaScript**.  
It showcases my work as a **Game Design and Electrical Engineering student** at the **University of the Witwatersrand**.

The website includes:

- 🎮 Game Projects  
- 📝 Essays  
- 📰 Blog Posts  
- 🎨 Fight Stick Designs  
- 🌐 Web Design Work

---

## 📁 Folder Structure Decisions

This project uses a minimalist and flat folder structure that reflects the current scale of the site. As it grows, I plan to refactor the structure. Here's a breakdown of the current decisions:

### ❌ 1. No `/styles` or `/scripts` Folders (Yet)

Although it's conventional to separate all CSS and JavaScript files into `/styles/` and `/scripts/` folders, I’ve deliberately chosen not to, because:

- Each webpage has at most one unique CSS and JavaScript file.
- Global/shared files already exist in the root.
- Additional folders would only increase the depth of the file tree without meaningful benefit at this scale.

> When the project grows, I may introduce those folders for better organization.

---

### 🏠 2. Dedicated `/Homepage/` Folder

The homepage-specific assets (e.g. CSS, JS, images, and audio) are stored in a dedicated `Homepage/` folder. This includes:

- `homepage.css`  
- `HomepageChills.mp3`  
- All homepage-specific images and scripts

**Note:** The homepage HTML itself (`index.html`) remains in the **root directory**.

**Why this structure?**

- Keeps the root directory clean  
- Makes it easier to locate homepage-specific assets  
- Clearly separates global vs page-specific resources

---

### 🌐 3. Global & Multi-use Files in Root Directory

Files that are used across multiple pages are kept directly in the root folder with capitalized filenames for visibility and consistency.

Examples:

- `Main.css` – Global styles across all pages  
- `Main.js` – Global JavaScript for UI elements (navbar, back-to-top button)  
- `Lightbox.js` – Shared script for the image gallery  
- `Selector.css` – General purpose CSS for shared layout logic

**Benefits:**

- Centralized and consistent access to shared files  
- Avoids duplication and improves reusability  
- Cleaner and easier to maintain

---

### 📄 4. Subpages Use Capitalized Folder Names

Subsections like `Blogs/`, `Essays/`, and `Designs/` follow a capitalized folder naming convention to align with global file naming. Each contains:

- Their own `index.html`  
- Local assets (images, page-specific styles/scripts)

**Why this works:**

- These pages don’t interact much with other folders  
- Capitalization keeps naming consistent with global assets  
- Keeps navigation and substructure organized

---

## 📌 Future Plans

As the website evolves, I intend to:

- 🌓 Add a dark mode  
- 📱 Improve responsive layout  
- ♻️ Modularize shared components  
- 🧠 Continue improving accessibility and semantic HTML

---

## 🧰 Tools & Tech

- 🧾 HTML5 / CSS3 / JavaScript  
- 🔤 Fonts: Google Fonts  
- 🚀 Hosting: GitHub Pages  
- ❎ No frameworks – pure front-end

---

## 🎨 Aesthetic

The visual style is **vaporwave-inspired**, featuring:

- 🌈 Neon pinks, aqua blues, pastel gradients  
- 🔠 Retro-styled fonts (Orbitron, VT323, Press Start 2P)  
- ✨ Hover animations and minimalist UI elements

This reflects both my creative aesthetic and technical ability.

---

## ✅ Accessibility & Best Practices

- 🖼️ All images include `alt` attributes (or `alt=""` when decorative)  
- 🧱 Semantic HTML is used throughout (`<nav>`, `<main>`, `<section>`, etc.)  
- ♿ ARIA labels improve screen reader accessibility  
- ⌨️ Lightbox and navigation are keyboard-navigable

---

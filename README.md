💻 Portfolio Website - Tal Peretz
This is the repository for my personal portfolio website. It is built using HTML, CSS, and JavaScript. The purpose of the site is to showcase my portfolio work as a Game Design and Electrical Engineering student at the University of the Witwatersrand. It features my game projects, essays, blog posts, fight stick designs, and web designs.

📁 Folder Structure Decisions
This project intentionally uses a flat and minimalist folder structure to reflect the current scope of the site. As the site grows, I plan to expand the structure accordingly—but for now, these decisions help keep things lean and easy to manage.

1. ❌ Removed /styles and /scripts folders
Although it's a common convention to store all CSS and JS files in dedicated styles/ and scripts/ folders, I chose to omit these folders for now. Here’s why:

Each page only has one unique CSS and JS file, in addition to shared/global files.

Keeping them in separate folders would add unnecessary depth to the project tree.

This keeps things lightweight and easier to navigate while the site is small.

If the project grows significantly, I’ll consider reimplementing dedicated folders.

2. 🏠 Dedicated /Homepage/ Folder
The homepage-specific assets (CSS, JS, images, and audio) are stored in their own folder:

This includes: homepage.css, HomepageChills.mp3, and all homepage-specific images and scripts.

The actual homepage HTML (index.html) remains in the root directory.

I chose this structure to:

Reduce clutter in the root folder

Quickly locate all homepage-specific files

Maintain a clear separation between global resources and page-specific ones

While convention says to place homepage assets in the root, this method improves personal workflow and maintainability for me.

3. 🌐 Global & Multi-use Files in Root Directory
Files used by multiple pages are stored directly in the root folder and use capitalised filenames to help them stand out. Examples:

Main.css – Global stylesheet used across pages

Main.js – Global JS for UI elements (e.g. navbar, back-to-top button)

Lightbox.js – Shared gallery script used by multiple pages

Selector.css – Style overrides or special selectors used across pages

This structure ensures:

Easy access to global resources

Cleaner code reuse

No confusion with page-specific styles/scripts

4. 📄 Subpages Named with Capital Letters
Subpages such as Blogs, Essays, and Designs each have their own folders and follow this naming convention:

Folder and individual web page file names start with capital letters for consistency with global files.

These subpages have minimal or no interdependence with other files, so this structure doesn’t cause confusion.

Each navigation folder contains its own index.html (selector webpage) and any page-specific assets.

📌 Future Plans
As the site grows, I may introduce /styles and /scripts folders to reduce clutter.

Possible future features: dark mode, responsive design improvements, and modular components.

Semantic HTML and ARIA attributes will continue to be improved for accessibility.

🧰 Tools & Tech
HTML5 / CSS3 / JavaScript

Font libraries: Google Fonts

Hosting: Github Pages Deployment

No frameworks

🎨 Aesthetic
The site uses a vaporwave-inspired visual style, with:

Neon pinks, aqua blues, and pastel gradients

Retro fonts and icons

Minimalistic UI elements and hover animations

This reflects my creative side while also showcasing technical skills.

✅ Accessibility & Best Practices
Images include meaningful alt attributes (or alt="" when decorative)

Navigation uses semantic HTML elements and aria-labels where appropriate

Lightbox and navigation are keyboard-navigable


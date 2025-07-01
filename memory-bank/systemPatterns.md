# System Patterns: LSO Landing Page

## 1. Architecture Overview

The system follows a simple, static-site architecture. It consists of a collection of HTML, CSS, and JavaScript files that are served directly to the user's browser. There is no backend application logic or database.

*   **Structure:** The project is composed of multiple HTML files, each representing a different section of the landing page (e.g., `index.html`, `what.html`, `why.html`). This is a multi-page site, not a single-page application (SPA).
*   **Styling:** A single `style.css` file is used to maintain a consistent look and feel across all pages.
*   **Interactivity:** A single `script.js` file provides any necessary client-side interactivity, such as navigation handling or animations.

## 2. Key Technical Decisions

*   **Static Site:** Chosen for simplicity, performance, and ease of deployment. It avoids the complexity of a backend framework, which is unnecessary for this project.
*   **Multi-Page Architecture:** The project follows a multi-page architecture. The navigation logic in `script.js` has been updated to correctly handle active state highlighting across different pages.
*   **Vanilla JavaScript:** No frontend frameworks (like React, Vue, or Angular) are used. This keeps the project lightweight and free of external dependencies.

## 3. Component Relationships

*   **Navigation:** The primary navigation component (likely in `index.html` and replicated across other pages) links to the various HTML files.
*   **Shared CSS/JS:** All HTML files link to the same `style.css` and `script.js` files, ensuring consistent styling and behavior.

## 4. Critical Implementation Paths

*   **Navigation System:** The navigation system is now functional. The JavaScript correctly identifies the current page and applies an `.active` class to the corresponding navigation link.
*   **Styling Consistency:** The `style.css` is well-organized, and its effectiveness is enhanced by the now-functional navigation.

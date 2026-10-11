# Agent Instructions: Static Web Development (HTML & CSS Only)

## Project Overview
This is a foundational, purely static website project built with vanilla HTML5 and CSS3.

> **CRITICAL BOUNDARY:**
> Do **NOT** introduce JavaScript, TypeScript, npm packages, build tools (Vite, Webpack), CSS preprocessors (SASS/SCSS), or utility frameworks (Bootstrap, Tailwind). The architecture must remain vanilla static files until explicitly instructed by the user.

---

## Directory Structure
Maintain the project organization strictly:

.
├── AGENTS.md
├── index.html
├── pages/             # Additional HTML pages (e.g., about.html, contact.html)
├── css/
│   ├── style.css      # Primary global styles and layout
│   └── reset.css      # CSS reset/normalize (if present)
└── assets/
├── images/        # Static imagery (svg, webp, png, jpg)
└── icons/

---

## Responsive Design Standards
- **Viewport Meta Tag:** Every HTML page must include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` inside the `<head>`.
- **Strategy (Mobile-First):**
    - Base CSS rules must target mobile viewports first (default styles outside media queries).
    - Use **`min-width`** media queries to progressively enhance the layout for wider screens. Do not use `max-width` queries unless handling an isolated exception.
- **Breakpoints:** Use a standardized set of breakpoints:
    - Mobile: Base styles (< 768px)
    - Tablet: `@media (min-width: 768px)`
    - Desktop: `@media (min-width: 1024px)`
    - Large Desktop: `@media (min-width: 1280px)`
- **Sizing & Fluid Units:**
    - Never set fixed `width` on containers; use fluid widths (e.g., `width: 100%`, `max-width: 1200px`, `margin: 0 auto`).
    - Use `rem` for typography and spacing, rather than fixed `px`.
    - Use `min-height` instead of fixed `height` so containers do not cause overflow when text wraps on smaller screens.
- **Responsive Media:**
    - Images must always scale down fluidly. Every stylesheet must include:
      img, picture, video {
      max-width: 100%;
      height: auto;
      display: block;
      }
- **Layout Engines:**
    - Use Flexbox (`flex-direction: column` on mobile, switching to `row` at breakpoints) for 1D navigation and component alignment.
    - Use CSS Grid with auto-fit/minmax patterns for repeating card layouts:
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

---

## Verification & Quality Checklist
Before marking any task as complete, verify:
- [ ] No JavaScript (`<script>` tags or `.js` files) or CSS frameworks were introduced.
- [ ] No inline styles or embedded `<style>` blocks exist in HTML files.
- [ ] Every page has the responsive `<meta name="viewport">` tag in the `<head>`.
- [ ] Media queries follow the mobile-first pattern using `min-width`.
- [ ] No fixed pixel widths (`width: 800px`) that cause horizontal scrolling on narrow screens (tested down to 375px).
- [ ] All tags are properly closed with consistent 2-space indentation.
- [ ] Relative file paths resolve correctly based on directory depth (e.g., `../css/style.css` for pages in `pages/`).
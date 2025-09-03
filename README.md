# Team 1280 Website

## About

This is a website for Team 1280 - Ragin' C Biscuits that aims to address our Team's values, goals, and impacts. This website is made using a React and Vite framework with Tailwind CSS for styles and ESLint for code formatting and error analysis. Frontend scaffolding is complete, with Backend currently in progress. 

The deployed site is currently hosted via Vercel and can be found at [https://website-draft-psi.vercel.app/](https://website-draft-psi.vercel.app/)

*Please note that the website is currently not mobile friendly and is best viewed on larger screens* 

Patches and PR’s are welcome (and necessary). To create changes and observe reflected changes locally please do the following:

## Getting Started

Install Node.js here: [https://nodejs.org/en/download](https://nodejs.org/en/download), when installing be sure to add to PATH (this can also be done manually) or to a separate environment variable (which you will need to access when running the server)

Run the frontend locally by running the following commands:

- `git clone https://github.com/nano13579/website-draft.git` to clone the repo
- `cd app`
- `npm install` to install dependencies
- `npm run dev` to start local development server at http://localhost:5173/

Most of the frontend changes will and have been made at app/src/pages. Please ignore the styles folder which contains unused CSS from a previous iteration. They are currently there for reference and will be deleted at a later date. To add pages please create a new route at app/src/App.jsx.

Here is a present that will help you!

✨ Very Useful Documentation (A Present) ✨

[https://tailwindcss.com/docs/styling-with-utility-classes](https://tailwindcss.com/docs/styling-with-utility-classes) (styles)

[https://vite.dev/guide/](https://vite.dev/guide/) (backend)


TODOs:

- Make styles friendly, regardless of viewport size
    - Add support for mobile
- Change body text font, improve typography
- Update remaining pages with additional information
- Use SWC for Fast Refresh at vite.config.js (low priority)
- Change root location (low priority)

Codebase Notes:
- Use `w-full` instead of `w-screen` (scrollbar problems)
- Avoid using `vh`, screen height fractions, or similar (shortening window should have little effect)
- Have consistency for font types (e.g. headings)
- Text lines should be at max 80-120 chars (use large horizontal margins)
- Prefer to use tailwind instead of the css files

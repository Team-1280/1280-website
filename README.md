# Team 1280 Website


#### About

Just a preliminary draft with very basic routing and styles. Backend is to be further developed.

This is a website for Team 1280 - Ragin C’ Biscuits that aims to address our Team's values, goals, and impacts. This website is made using a React and Vite framework with Tailwind CSS for styles and ESLint for code formatting and error analysis. Frontend scaffolding is complete, with Backend currently in progress. 

The deployed site is currently hosted via Vercel and can be found at [https://website-draft-psi.vercel.app/](https://website-draft-psi.vercel.app/)

*Please note that the website is currently not mobile friendly and is best viewed on larger screens* 

Patches and PR’s are welcome (and necessary). To create changes and observe reflected changes locally please do the following:

#### Getting Started

Install Node.js here: [https://nodejs.org/en/download](https://nodejs.org/en/download), when installing be sure to add to PATH (this can also be done manually) or to a separate environment variable (which you will need to access when running the server)

Run the frontend locally by running the following commands:

- `git clone https://github.com/nano13579/website-draft.git` to clone the repo
- `cd app`
- `npm install` to install dependencies
- `npm run dev` to start local development server at http://localhost:5173/

Most of the frontend changes will and have been made at app/src/pages. Please ignore the styles folder which contains unused CSS from a previous iteration. They are currently there for reference and will be deleted at a later date. To add pages please create a new route at app/src/App.jsx.

Useful Documentation:
[https://tailwindcss.com/docs/styling-with-utility-classes](https://tailwindcss.com/docs/styling-with-utility-classes) (styles)
[https://vite.dev/guide/](https://vite.dev/guide/) (backend)

TODOs:

- Make styles friendly, regardless of viewport size
- Update remaining pages with additional information
- Change index.html to update tab appearance (low priority)
- Use SWC for Fast Refresh at vite.config.js (low priority)

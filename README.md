# Team 1280 Website

## About

This is a website for Team 1280 - Ragin' C Biscuits that aims to address our Team's values, goals, and impacts. This website is made using a React and Vite framework with Tailwind CSS for styles and ESLint for code formatting and error analysis. Frontend scaffolding is complete, with Backend currently in progress. 

The current webhosting service is Vercel. \
The current domain registrar is GoDaddy. \
Links: [team1280.com](https://team1280.com) and [team1280.vercel.app](https://team1280.vercel.app/)

There is an unused website in Bluehost.

*Please note that the website is currently not mobile friendly and is best viewed on larger screens* 

Patches and PRs are welcome (and necessary). To create changes and observe reflected changes locally please do the following:

## Getting Started

Install Node.js here: [https://nodejs.org/en/download](https://nodejs.org/en/download). When installing, be sure to add to PATH (this can also be done manually) or to a separate environment variable (which you will need to access when running the server)

Run the frontend locally by running the following commands:

- `git clone https://github.com/Team-1280/1280-website.git` to clone the repo
- `cd app`
- `npm install` to install dependencies
- `npm run dev` to start local development server at http://localhost:5173/

Most of the frontend changes will and have been made at `app/src/pages`. Please ignore the styles folder which contains mostly unused CSS from a previous iteration. They are currently there for reference and may be deleted at a later date. To add pages please create a new route at `app/src/App.jsx` and update `vite.config.js` routes.

Here is a present that will help you!

✨ Very Useful Documentation (A Present) ✨

[https://tailwindcss.com/docs/styling-with-utility-classes](https://tailwindcss.com/docs/styling-with-utility-classes) (styles)

[https://vite.dev/guide/](https://vite.dev/guide/) (backend)


### Building
Use `npm run build`, and ensure that `app` is set as the root directory.


## TODO
- Add support for mobile
- Update remaining pages with additional information
- Use SWC for Fast Refresh at vite.config.js (low priority)
- Change root location (low priority)
- `resources`, `news`, `robot-engineering` unfinished


### Codebase Notes
- Use `w-full` instead of `w-screen` (scrollbar problems)
- Avoid using `vh`, screen height fractions, or similar (shortening window should have little effect)
- Have consistency for font types (e.g. headings)
- Text lines should be at max 80-120 chars (use large horizontal margins)
- Prefer to use tailwind instead of the css files
- Test the layout on different sizes except mobile

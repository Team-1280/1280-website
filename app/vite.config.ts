import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://www.team1280.com",
      changefreq: "weekly",
      dynamicRoutes: [
        "/",
        "/calendar",
        "/about",
        "/outreach",
        "/resources",
        "/contact",
        "/join",
        "/leadership",
        "/news",
        "/robot-engineering",
        "/sponsors",
        "/donate",
        "/mentors",
        "/facility",
        "/first",
      ],
    }),
  ],
});

// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// NOTE: `site` is a placeholder until a host/domain is chosen. Update before deploy
// so canonical URLs, sitemap, and Open Graph absolute URLs are correct.
export default defineConfig({
  site: "https://bluemoonengineering.lk",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

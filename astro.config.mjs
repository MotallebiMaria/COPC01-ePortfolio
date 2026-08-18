import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://motallebimaria.github.io",
  base: "/COPC01-ePortfolio",
  trailingSlash: "always",
  integrations: [sitemap()],
});

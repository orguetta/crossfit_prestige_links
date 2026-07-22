import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://link.prestigefit.co.il",
  output: "server",
  adapter: cloudflare(),
  prefetch: true,
  integrations: [sitemap()]
});
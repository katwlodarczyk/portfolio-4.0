// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://katwlodarczyk.com',
  base: 'portfolio-4.0',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
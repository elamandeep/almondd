import { defineConfig } from 'astro/config';
import swup from "@swup/astro";
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind'


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()]
});
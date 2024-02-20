import { defineConfig } from 'astro/config';
import swup from "@swup/astro";
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), partytown()]
});
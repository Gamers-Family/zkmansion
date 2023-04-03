import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [vue()],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@import "./src/assets/variables.scss";`
        }
      }
    }
  },
  adapter: node({
    mode: "standalone"
  })
});
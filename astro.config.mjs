import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cimagraphy.photos',
  integrations: [sitemap(), react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    formats: ['webp', 'avif'],
    quality: 80,
  },
});
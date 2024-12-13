import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://TEIE_TEGELIK_GITHUB_KASUTAJANIMI.github.io',
  base: '/AstroFront',
  output: 'static',
  integrations: [
    tailwind(),
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ]
}); 
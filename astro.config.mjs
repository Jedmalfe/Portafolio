// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://jedmalfe.github.io/Portafolio/
// When moving to a custom domain, set `site` to the domain and remove `base`.
export default defineConfig({
  site: 'https://jedmalfe.github.io',
  base: '/Portafolio',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});

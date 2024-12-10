// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig(
{
  site: 'https://jmota.netlify.app/',
  prefetch: true,
  integrations: [tailwind(), react(), mdx(), sitemap()],
  i18n: 
  {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    routing:
    {
      prefixDefaultLocale: false,
    },
    fallback:
    {
      fr: 'en',
      es: 'en',
    },
  },
})

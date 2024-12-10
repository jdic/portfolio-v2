import type { APIRoute } from 'astro'

const getTobotsTxt = (sitemapURL: URL): string =>
`User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}`

/**
 * Handle the `/robots.txt` path
 * @returns An HTTP response with the content of the robots.txt file.
 */
export const GET: APIRoute = ({ site }) =>
{
  const sitemapURL = new URL('/sitemap-index.xml', site)

  return new Response(getTobotsTxt(sitemapURL))
}

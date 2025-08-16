// Sitemap generator for SEO
import { projectsData } from '../data/projectsData.js';

const baseUrl = 'https://yliu-99.github.io/portfolio-first-version';

const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/projects', priority: 0.9, changefreq: 'weekly' },
  { url: '/graphic', priority: 0.8, changefreq: 'weekly' },
  { url: '/video', priority: 0.8, changefreq: 'weekly' }
];

// Generate sitemap.xml content
export const generateSitemap = () => {
  const projectPages = projectsData.map(project => ({
    url: `/projects/${project.slug}`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }));

  const allPages = [...staticPages, ...projectPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin or private areas if any
# User-agent: *
# Disallow: /admin/
`;
};

// Function to create and download sitemap (for development)
export const downloadSitemap = () => {
  const sitemapContent = generateSitemap();
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Function to create and download robots.txt (for development)
export const downloadRobotsTxt = () => {
  const robotsContent = generateRobotsTxt();
  const blob = new Blob([robotsContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'robots.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

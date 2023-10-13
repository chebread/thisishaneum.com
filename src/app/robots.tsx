export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://thisishaneum.com/sitemap.xml',
    host: 'https://thisishaneum.com',
  };
}

import SitemapGenerator from 'sitemap-generator';

// Create generator instance
const generator = SitemapGenerator('https://syed-huzaifa-nazim.vercel.app/', {
  stripQuerystring: false, // Keep query parameters if you use them
  filepath: './public/sitemap.xml' // Output file path
});

// Register event listeners (optional)
generator.on('done', () => {
  console.log('Sitemaps created!');
});

generator.on('error', (error) => {
  console.log(error); // Log errors encountered during crawling
});

// You can add static/unlinked URLs manually
// generator.getSitemap().addURL('/my-static-page');

// Start the crawler
generator.start();

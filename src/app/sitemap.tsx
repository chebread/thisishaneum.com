import getPosts from '../lib/getPosts';

const sitemap = async () => {
  const posts = await getPosts();
  const blogs = posts.map((post: any) => ({
    url: `https://thisishaneum.com/${post.slug}`,
    lastModified: new Date(post.lastModified).toISOString().split('T')[0],
  }));

  const routes = [''].map((route: any) => ({
    url: `https://thisishaneum.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
};

export default sitemap;

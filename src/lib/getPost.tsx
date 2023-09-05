import getPosts from './getPosts';

async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post: any) => post.slug === slug);
}

export default getPost;

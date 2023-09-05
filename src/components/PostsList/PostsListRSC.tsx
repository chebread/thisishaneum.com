import PostsList from '@components/PostsList';
import getPosts from '@lib/getPosts';

export default async function PostsListRSC() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}

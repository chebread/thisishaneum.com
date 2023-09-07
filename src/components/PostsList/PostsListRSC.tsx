import PostsList from '@components/PostsList';
import getPosts from '@lib/getPosts';

export default async function PostsListRSC() {
  const posts = await getPosts();
  const pinnedPosts = posts.filter((post: any) => post.pinned === true);
  const notPinnedPosts = posts.filter((post: any) => post.pinned != true);

  return <PostsList pinnedPosts={pinnedPosts} posts={notPinnedPosts} />;
}

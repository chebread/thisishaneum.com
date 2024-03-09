import PostsList from './posts-list';
import getPosts from 'lib/get-posts';

export default async function PostsListRSC() {
  const posts = await getPosts(true);
  const pinnedPosts = posts.filter((post: any) => post.pinned === true);
  const notPinnedPosts = posts.filter((post: any) => post.pinned != true);

  return <PostsList pinnedPosts={pinnedPosts} posts={notPinnedPosts} />;
}

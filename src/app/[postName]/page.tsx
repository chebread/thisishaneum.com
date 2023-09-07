import getPost from '@lib/getPost';
import getPosts from '@lib/getPosts';
import MdxViewer from '@components/MdxViewer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();

  console.log(posts);

  return posts.map((post: any) => {
    slug: post.slug;
  });
}

const PostPage = async ({
  params,
}: {
  params: {
    postName: string;
  };
}) => {
  const post: any = await getPost(params.postName);

  console.log(post);

  if (!post) {
    return notFound();
  }
  return <MdxViewer>{post?.body}</MdxViewer>;
};

export default PostPage;

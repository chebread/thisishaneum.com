import getPost from '@lib/getPost';
import getPosts from '@lib/getPosts';
import MdxViewer from '@components/Mdx/MdxViewer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();

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

  if (!post) {
    return notFound();
  }
  return <MdxViewer>{post?.body}</MdxViewer>;
};

export default PostPage;

import getPost from 'lib/get-post';
import getPosts from 'lib/get-posts';
import MDXViewer from 'components/mdx/mdx-viewer';
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
  return (
    <>
      <MDXViewer>{post?.body}</MDXViewer>
    </>
  );
};

export default PostPage;

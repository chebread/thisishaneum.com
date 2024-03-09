import PostBody from 'components/post-body';
import PostContainer from 'components/post-container';
import PostHeader from 'components/post-header';
import PostNavigation from 'components/post-navigation';
import getPosts from 'lib/get-posts';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: any) => {
    slug: post.slug;
  });
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    postName: string;
  };
}): Promise<Metadata> => {
  const post: any = (await getPosts()).find(
    (post: any) => post?.slug === params.postName
  );

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
    },
    twitter: {
      title: post?.title,
      description: post?.description,
    },
  };
};

async function getData({ slug }: { slug: string }) {
  const posts = await getPosts();
  const postIndex = posts.findIndex((post: any) => post?.slug === slug);
  const post = posts[postIndex];

  return {
    ...post,
  };
}

export default async function PostLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    postName: string;
  };
}) {
  const post: any = await getData({
    slug: params.postName,
  });

  return (
    <>
      <PostContainer>
        <PostNavigation />
        <PostHeader title={post.title} date={post.date} />
        <PostBody>{children}</PostBody>
      </PostContainer>
    </>
  );
}

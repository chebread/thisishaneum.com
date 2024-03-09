import PostBody from 'components/post-body';
import PostContainer from 'components/post-container';
import PostHeader from 'components/post-header';
import PostNavigation from 'components/post-navigation';

export const metadata = {
  title: '차한음 이력서',
  description: '안녕하세요. 프론트엔드 개발자 차한음입니다.',
  openGraph: {
    title: '차한음 이력서',
    description: '안녕하세요. 프론트엔드 개발자 차한음입니다.',
  },
  twitter: {
    title: '차한음 이력서',
    description: '안녕하세요. 프론트엔드 개발자 차한음입니다.',
  },
};

export default async function PostLayout({
  children,
}: {
  children: JSX.Element;
}) {
  // children은 markdown 형태가 아닌 jsx 형태이며, 그러므로 a tag 변환, image 변환 등등 기능이 작동하지 않음
  // md로 할려면 string으로 mdxviewer을 통해 출력해야함

  return (
    <>
      <PostContainer>
        <PostNavigation />
        <PostHeader title="차한음 이력서" date="" />
        <PostBody>{children}</PostBody>
      </PostContainer>
    </>
  );
}

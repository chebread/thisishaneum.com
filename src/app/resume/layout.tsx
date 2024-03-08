import PostBody from 'components/PostBody';
import PostContainer from 'components/PostContainer';
import PostHeader from 'components/PostHeader';
import PostNavigation from 'components/PostNavigation';

export default async function PostLayout({
  children,
}: {
  children: JSX.Element;
}) {
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

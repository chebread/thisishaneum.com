import FeedContainer from 'components/FeedContainer';
import PostsListRSC from '../components/PostsList/PostsListRSC';
import FeedHeader from 'components/FeedHeader';
import BlurLayer from 'components/blur-layer';

// (0): 내가 원하는 것은 portfolio만 빼고 global styles를 전역화 하는 것이다. => 다른 리포지토리를 만들자
// 그리고 제발 apple font 쓰는 방법 (정식) next.js에서 그 방법은 무엇인가

const Feed = () => {
  return (
    <>
      <BlurLayer />
      <FeedContainer>
        <FeedHeader />
        <PostsListRSC />
      </FeedContainer>
    </>
  );
};

export default Feed;

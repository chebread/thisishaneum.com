import FeedContainer from 'components/FeedContainer';
import PostsListRSC from '../components/PostsList/PostsListRSC';
import FeedHeader from 'components/FeedHeader';
import PostGlobalStyles from 'styles/PostGlobalStyles';

// (0): 내가 원하는 것은 portfolio만 빼고 global styles를 전역화 하는 것이다.

const Feed = () => {
  return (
    <>
      <PostGlobalStyles />
      <FeedContainer>
        <FeedHeader />
        <PostsListRSC />
      </FeedContainer>
    </>
  );
};

export default Feed;

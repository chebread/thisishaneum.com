import FeedContainer from '@components/FeedContainer';
import PostsListRSC from '../components/PostsList/PostsListRSC';
import FeedHeader from '@components/FeedHeader';

const Home = () => {
  return (
    <FeedContainer>
      <FeedHeader />
      <PostsListRSC />
    </FeedContainer>
  );
};

export default Home;

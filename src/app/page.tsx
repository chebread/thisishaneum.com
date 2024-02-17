import FeedContainer from 'components/FeedContainer';
import PostsListRSC from '../components/PostsList/PostsListRSC';
import FeedHeader from 'components/FeedHeader';

const Feed = () => {
  return (
    <FeedContainer>
      <FeedHeader />
      <PostsListRSC />
    </FeedContainer>
  );
};

export default Feed;

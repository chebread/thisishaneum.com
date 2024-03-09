'use client';

import Footer from 'components/footer';
import BlogLayout from 'components/blog-layout';
import { styled } from 'styled-components';

const FeedContainer = ({ children }) => {
  return (
    <BlogLayout>
      <Container>{children}</Container>
      <Footer />
    </BlogLayout>
  );
};

const Container = styled.div``;

export default FeedContainer;

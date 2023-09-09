'use client';

import Footer from '@components/Footer/Footer';
import Layout from '@components/Layout/Layout';
import { styled } from 'styled-components';

const FeedContainer = ({ children }) => {
  return (
    <Layout>
      <Container>{children}</Container>
      <Footer />
    </Layout>
  );
};

const Container = styled.div``;

export default FeedContainer;

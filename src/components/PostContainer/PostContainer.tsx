'use client';

import { styled } from 'styled-components';
import Layout from 'components/Layout';
import Footer from 'components/Footer/Footer';

export default function PostContainer({ children }) {
  return (
    <>
      <Layout>
        <Container>{children}</Container>
        <Footer />
      </Layout>
    </>
  );
}

const Container = styled.div`
  margin-top: 2rem;
`;

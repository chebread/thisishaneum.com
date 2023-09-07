'use client';

import { styled } from 'styled-components';
import Layout from '@components/Layout';

export default function PostContainer({ children }) {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
}

const Container = styled.div`
  margin-top: 2rem;
`;

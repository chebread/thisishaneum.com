'use client';

import { styled } from 'styled-components';
import BlogLayout from 'components/blog-layout';
import Footer from 'components/footer';

export default function PostContainer({ children }) {
  return (
    <BlogLayout>
      <Container>{children}</Container>
      <Footer />
    </BlogLayout>
  );
}

const Container = styled.div`
  margin-top: 4rem;
`;

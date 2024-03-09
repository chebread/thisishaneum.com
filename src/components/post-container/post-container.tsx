'use client';

import { styled } from 'styled-components';
import BlogLayout from '../blog-layout';
import Footer from '../footer/footer';

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

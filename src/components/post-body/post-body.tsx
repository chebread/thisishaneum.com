'use client';

import { styled } from 'styled-components';
import 'github-markdown-css';

// (0): description을 본문에 추가할까 말까?

export default function PostBody({ children }) {
  return <Container className="markdown-body">{children}</Container>;
}

const Container = styled.article`
  margin-top: 2rem;
  background-color: inherit;
  // Set code block light / dark theme
  [data-theme='light'] {
    display: block;
  }
  [data-theme='dark'] {
    display: none;
  }
  /* .post-image {
    box-shadow: 0 10.5px 21px rgba(0, 0, 0, 0.08);
  } */
  @media (prefers-color-scheme: dark) {
    [data-theme='light'] {
      display: none;
    }
    [data-theme='dark'] {
      display: block;
    }
    /* .post-image {
      box-shadow: 0 10.5px 21px rgba(255, 255, 255, 0.08);
    } */
  }
`;

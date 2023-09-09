'use client';

import { styled } from 'styled-components';
import 'github-markdown-css';
import themedPalette from '@styles/themes/themedPalette';

// (0): description을 본문에 추가할까 말까?

export default function PostBody({ children }) {
  return <Container className="markdown-body">{children}</Container>;
}

const Container = styled.article`
  margin-top: 2rem;
  background-color: ${themedPalette.background_color};

  // Set code block light / dark theme
  [data-theme='light'] {
    display: block;
  }
  [data-theme='dark'] {
    display: none;
  }
  @media (prefers-color-scheme: dark) {
    [data-theme='light'] {
      display: none;
    }
    [data-theme='dark'] {
      display: block;
    }
  }
`;

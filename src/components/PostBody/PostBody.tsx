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
  .markdown-body-link {
    // disable active effect
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-touch-callout: none;
  }
`;

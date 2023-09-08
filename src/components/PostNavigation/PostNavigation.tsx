'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import BackIcon from '@assets/BackIcon.svg';
import themedPalette from '@styles/themes/themedPalette';

export default function PostNavigation() {
  return (
    <Container>
      <RedirectBtn href="/">
        <BackIcon />
      </RedirectBtn>
    </Container>
  );
}

const Container = styled.nav``;

const RedirectBtn = styled(Link)`
  cursor: pointer;
  // disable selection
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  // disable active effect
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-touch-callout: none;

  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;

  display: inline-flex;
  margin-bottom: 4rem;

  &:hover {
    /* background-color: #f5f5f5; */
    svg {
      path {
        fill: ${themedPalette.color};
      }
    }
  }
  &:active {
    transform: scale(0.86);
  }

  svg {
    height: 1rem;
    width: auto;
    path {
      transition-property: fill;
      transition-duration: 0.15s;
      transition-timing-function: ease-out;

      fill: rgba(107, 114, 128, 0.8);
    }
  }
`;

'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import BackSvg from 'assets/svg/back.svg';
import themedPalette from 'styles/themes/themed-palette';

export default function PostNavigation() {
  return (
    <Container>
      <RedirectBtn href="/">
        <BackSvg />
      </RedirectBtn>
    </Container>
  );
}

const Container = styled.nav``;

const RedirectBtn = styled(Link)`
  cursor: pointer;

  display: inline-flex;
  margin-bottom: 2rem;

  @media (min-width: 639.9px) {
    // desktop
    &:hover {
      svg {
        path {
          fill: ${themedPalette.color};
        }
      }
    }
  }
  &:active {
    @media (max-width: 639.9px) {
      // mobile
      svg {
        path {
          fill: ${themedPalette.color};
        }
      }
    }
    svg {
      transform: scale(0.86);
    }
  }

  svg {
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;

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

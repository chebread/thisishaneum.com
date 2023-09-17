'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import themedPalette from '@styles/themes/themedPalette';
import Profile from '@assets/profile.jpg';
import EmailIcon from '@assets/EmailIcon.svg';
import GitHubIcon from '@assets/GitHubIcon.svg';
import VelogIcon from '@assets/VelogIcon.svg';

const FeedHeader = () => {
  return (
    <Container>
      <Img
        href="/"
        style={{
          backgroundImage: `url(${Profile.src})`,
        }}
      />
      <Title>Cha Haneum</Title>
      <Links>
        <LinkBtn href="mailto:chahanm@proton.me" target="_self">
          <EmailIcon />
        </LinkBtn>
        <LinkBtn href="https://github.com/chebread" target="_self">
          <GitHubIcon />
        </LinkBtn>
        <LinkBtn href="https://velog.io/@haneum" target="_self">
          <VelogIcon />
        </LinkBtn>
      </Links>
    </Container>
  );
};

const Img = styled(Link)`
  height: 6.25rem;
  width: 6.25rem;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 1rem;

  --un-border-opacity: 1;
  border-color: rgba(255, 255, 255, 1);
  border-width: 4px;
  border-style: solid;
  box-sizing: border-box;
`;
const LinkBtn = styled(Link)`
  cursor: pointer;

  transition-property: background-color transform;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;

  background-color: rgba(75, 85, 99, 0.1);
  @media (prefers-color-scheme: dark) {
    background-color: rgba(156, 163, 175, 0.1);
  }

  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: rgba(75, 85, 99, 0.15);
  }
  &:active {
    transform: scale(0.86);
  }

  svg {
    path {
      fill: rgba(55, 65, 81, 1);
      @media (prefers-color-scheme: dark) {
        fill: rgba(156, 163, 175, 1);
      }
    }
  }
`;
const Links = styled.nav`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.5rem;
`;
const Title = styled.h1`
  all: unset;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin-top: 0.75rem;
  color: ${themedPalette.light_color};
`;
const Container = styled.div`
  width: 100%;
  height: 20rem;
  @media (min-width: 639.9px) {
    height: 22.5rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-color: rgba(209, 213, 219, 0.8);
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export default FeedHeader;

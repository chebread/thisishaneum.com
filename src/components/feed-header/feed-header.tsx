'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import themedPalette from 'styles/themes/themed-palette';
import PhotoImage from 'assets/images/photo.jpg';
import EmailSvg from 'assets/svg/email.svg';
import GitHubSvg from 'assets/svg/github.svg';
import VelogSvg from 'assets/svg/velog.svg';
import LinkedInSvg from 'assets/svg/linked-in.svg';

// (0): Blur layor 만들기, 헤더 제구성하기, 포트폴리오 사이트 만들기 (portfolio), chebread.github.io로 일단 한번 배포해보기
// (0): next.js 설정뭐 더 할꺼 있나 확인하기

const FeedHeader = () => {
  return (
    <Container>
      <Img
        href="/"
        style={{
          backgroundImage: `url(${PhotoImage.src})`,
        }}
      />
      <Title>Cha Haneum</Title>
      <Links>
        <LinkBtn href="mailto:chahanm@proton.me" target="_self">
          <EmailSvg />
        </LinkBtn>
        <LinkBtn href="https://github.com/chebread" target="_self">
          <GitHubSvg />
        </LinkBtn>
        <LinkBtn href="https://www.linkedin.com/in/chebread/" target="_self">
          <LinkedInSvg />
        </LinkBtn>
        <LinkBtn href="https://velog.io/@haneum" target="_self">
          <VelogSvg />
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
  /* box-shadow: 0 10.5px 21px rgba(0, 0, 0, 0.08);
  @media (prefers-color-scheme: dark) {
    box-shadow: 0 10.5px 21px rgba(255, 255, 255, 0.08);
  } */

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

  /* border-color: rgba(209, 213, 219, 0.8);
  border-bottom-width: 1px;
  border-bottom-style: solid; */
`;

export default FeedHeader;

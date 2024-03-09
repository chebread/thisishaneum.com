'use client';

import themedPalette from 'styles/themes/themed-palette';
import Link from 'next/link';
import { styled } from 'styled-components';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      {/* <Text>
        Written by{' '}
        <Redirect href="https://github.com/chebread" target="_self">
          Cha Haneum
        </Redirect>
      </Text> */}
      <Text>
        © {year} by{' '}
        <Redirect href="https://github.com/chebread" target="_self">
          Cha Haneum
        </Redirect>{' '}
        is licensed under{' '}
        <Redirect
          href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
          target="_self"
        >
          CC BY 4.0
        </Redirect>
      </Text>
    </Container>
  );
};

const Container = styled.footer`
  padding-bottom: 2rem;
  margin-top: 4rem;
  @media (min-width: 639.9px) {
    padding-bottom: 4rem;
    margin-top: 5rem;
  }

  font-size: 14px;
  line-height: 1.25rem;
  font-family: 400;
  color: rgba(156, 163, 175, 8);
  @media (prefers-color-scheme: dark) {
    color: rgba(107, 114, 128, 8);
  }
`;

const Text = styled.p`
  margin: 0;
  color: inherit;
`;

const Redirect = styled(Link)`
  cursor: pointer;

  transition-property: color;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;

  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${themedPalette.footer_color};
  }
`;

export default Footer;

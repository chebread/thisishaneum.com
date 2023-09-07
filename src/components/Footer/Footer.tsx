'use client';

import Layout from '@components/Layout';
import themedPalette from '@styles/themes/themedPalette';
import Link from 'next/link';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Layout>
      <Container>
        <Text>
          Written by{' '}
          <Redirect href="https://github.com/chebread" target="_self">
            Cha Haneum
          </Redirect>
        </Text>
      </Container>
    </Layout>
  );
};

const Container = styled.footer`
  padding: 5rem 0 4rem 0;
  font-size: 14px;
  line-height: 1.25rem;
  font-family: 400;

  color: rgba(156, 163, 175, 8);
  @media (prefers-color-scheme: dark) {
    color: rgba(107, 114, 128, 8);
  }
`;

const Text = styled.p`
  color: inherit;
`;

const Redirect = styled(Link)`
  cursor: pointer;
  // disable active effect
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-touch-callout: none;

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

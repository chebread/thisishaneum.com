'use client';

import { createGlobalStyle, css } from 'styled-components';
import appCssVars from './cssVars/appCssVars';
import appThemes from './themes/appThemes';
import { normalize } from 'styled-normalize';
import themedPalette from './themes/themedPalette';

const styles = css``;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${styles}
  body {
    ${appCssVars.all}
    ${appCssVars.mobile}
  }
  @media (min-width: 639.9px) {
    body {
      ${appCssVars.desktop}
    }
  }
  body {
    ${appThemes.light};
  }
  @media (prefers-color-scheme: dark) {
    body {
      ${appThemes.dark}
    }
  }

  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    position: relative;
    height: 100%;
    background-color: ${themedPalette.background_color};
  }

  // disable tab highlight
  button,
  textarea,
  input,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default GlobalStyles;

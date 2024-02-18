'use client';

import { createGlobalStyle } from 'styled-components';
import appCssVars from './cssVars/appCssVars';
import appThemes from './themes/appThemes';
import { normalize } from 'styled-normalize';
import themedPalette from './themes/themedPalette';

const GlobalStyles = createGlobalStyle`
  ${normalize}
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
    color: rgb(25, 26, 32);
    margin: 0px;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    /* background-color: ${themedPalette.background_color};
    color: ${themedPalette.color};
    @media (prefers-color-scheme: dark) {
      @media (min-width: 639.9px) {
        background-color: ${themedPalette.background_color};
      }
      @media (max-width: 639.9px) {
        background-color: #000000;
      }
    } */
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

'use client';

import { createGlobalStyle } from 'styled-components';
import appCssVars from './cssVars/appCssVars';
import appThemes from 'styles/themes/app-themes';
import { normalize } from 'styled-normalize';
import themedPalette from 'styles/themes/themed-palette';

const GlobalStyle = createGlobalStyle`
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
    background-color: ${themedPalette.background_color};
    color: ${themedPalette.color};
    @media (prefers-color-scheme: dark) {
      @media (min-width: 639.9px) {
        background-color: ${themedPalette.background_color};
      }
      @media (max-width: 639.9px) {
        background-color: #000000;
      }
    }
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
  // custom
  .blur-layer {
    position: fixed;
    z-index: 1;
    top: 0;
    width: calc(
      100% + max(24px, env(safe-area-inset-left)) +
        max(24px, env(safe-area-inset-right))
    );
    height: 4rem;
    margin-bottom: calc(-1 * 4rem);
    margin-left: calc(-1 * max(24px, env(safe-area-inset-left)));
    backdrop-filter: blur(5px);
    mask-image: linear-gradient(to bottom, #000000 25%, transparent);
    opacity: 0.95;
    pointer-events: none;
    user-select: none;
    
    &:after {
      position: absolute;
      background: linear-gradient(to bottom, #ffffff, transparent);
      @media (prefers-color-scheme: dark) {
        @media (min-width: 639.9px) {
          background: linear-gradient(to bottom, #121212, transparent);
        }
        @media (max-width: 639.9px) {
          background: linear-gradient(to bottom, #000000, transparent);
        }
      }
      content: '';
      inset: 0;
    }
  }

`;

export default GlobalStyle;

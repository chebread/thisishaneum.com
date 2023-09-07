import Link from 'next/link';
import Image from 'next/image';
import { Code } from 'bright';
import darkCustomTheme from './darkCustomTheme.json';
import lightCustomTheme from './lightCustomTheme.json';

Code.theme = {
  dark: darkCustomTheme,
  light: lightCustomTheme,
  // using a different CSS selector:
  // lightSelector: '[data-theme="light"]',
  // lightSelector: 'html.light',
};

const MdxComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link
        {...props}
        href={props.href || ''}
        target="_self"
        className="markdown-body-link" // for disable active effect
      >
        {children}
      </Link>
    );
  },
  img: ({ props }) => {
    return <Image {...props} alt={props.alt || ''} />;
  },
  pre: ({ children, ...props }) => {
    return <Code {...props}>{children}</Code>;
  },
};

export default MdxComponents;

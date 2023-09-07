import Link from 'next/link';
import Image from 'next/image';
import { Code } from 'bright';
import darkCustomTheme from './darkCustomTheme.json';
import lightCustomTheme from './lightCustomTheme.json';

Code.theme = {
  light: lightCustomTheme,
  dark: darkCustomTheme,
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
    return (
      <>
        <div data-theme="dark">
          <Code {...props}>{children}</Code>
        </div>
        <div data-theme="light">
          <Code {...props}>{children}</Code>
        </div>
      </>
    );
  },
};

export default MdxComponents;

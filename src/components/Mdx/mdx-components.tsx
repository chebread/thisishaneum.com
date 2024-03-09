import Link from 'next/link';
import { Code } from 'bright';
import darkCustomTheme from './dark-bright-theme.json';
import lightCustomTheme from './light-bright-theme.json';
import MdxImage from './mdx-image';

Code.theme = {
  light: lightCustomTheme,
  dark: darkCustomTheme,
};

const MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''} target="_self">
        {children}
      </Link>
    );
  },
  img: MdxImage as any,
  Image: MdxImage as any,
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

export default MDXComponents;

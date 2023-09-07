import Link from 'next/link';
import Image from 'next/image';
import { Code } from 'bright';
import customTheme from './customTheme.json';

Code.theme = customTheme;

const MdxComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''} target="_self">
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

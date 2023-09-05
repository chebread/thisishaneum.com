import Link from 'next/link';
import Image from 'next/image';
import { Code } from 'bright';

const MdxComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    );
  },
  img: ({ props }) => {
    return <Image {...props} alt={props.alt || ''} />;
  },
  pre: Code,
};

export default MdxComponents;

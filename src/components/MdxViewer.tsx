import { MDXRemote } from 'next-mdx-remote/rsc';
import MdxComponents from './MdxComponents';

const MdxViewer = ({ children }: { children: string }) => {
  return (
    // @ts-expect-error RSC
    <MDXRemote source={children} components={MdxComponents} />
  );
};

export default MdxViewer;

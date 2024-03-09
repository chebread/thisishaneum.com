import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from './mdx-components';

const MDXViewer = ({ children }: { children: string }) => {
  return <MDXRemote source={children} components={MDXComponents} />;
};

export default MDXViewer;

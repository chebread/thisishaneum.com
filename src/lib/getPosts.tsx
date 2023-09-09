import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

const getPosts = cache(async () => {
  const posts = await fs.readdir(path.join(process.cwd(), './posts')); // await fs.readdir('./posts/');

  const postsWithMetadata = await Promise.all(
    posts
      .filter(
        file => path.extname(file) === '.md' || path.extname(file) === '.mdx'
      )
      .map(async file => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null; // (0): 에러 해결하기
        }

        const slug: string = file.substring(0, file.indexOf('.')); // file name is blog's slug

        return {
          ...data,
          body: content,
          slug: slug,
        };
      })
  );

  const filtered = postsWithMetadata
    .filter(post => post !== null)
    .sort((a: any, b: any) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    );

  return filtered;
});

export default getPosts;

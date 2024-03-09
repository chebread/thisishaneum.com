import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
// import getAllFiles from './getAllFiles';
// import getLastModifiedDate from './getLastModifiedDate'; // Vercel 서버 사용하므로 이는 불가능한 기능임

const thirdPartyPosts: any = [
  {
    title: '차한음 이력서',
    description: '안녕하세요. 프론트엔드 개발자 차한음입니다.',
    body: '',
    date: '',
    pinned: true,
    lastModified: 0,
    isThirdParty: true,
    href: 'resume',
  },
];

const getPosts = cache(async (includeThirdPartyPosts?: boolean) => {
  const posts = await fs.readdir(path.join(process.cwd(), './posts')); // await fs.readdir('./posts/');
  // const posts = getAllFiles('./posts');

  const postsWithMetadata = await Promise.all(
    posts
      .filter(
        file => path.extname(file) === '.md' || path.extname(file) === '.mdx'
      )
      .map(async file => {
        const filePath = `./posts/${file}`;
        // const filePath = `./${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }
        const slug: string = file.substring(0, file.indexOf('.'));
        // const slug: string = file.substring(
        //   file.lastIndexOf('/') + 1,
        //   file.indexOf('.')
        // ); // file name is blog's slug
        // 뒤에서 부터 앞에 '/' 까지

        // const date = await getLastModifiedDate(filePath);

        return {
          ...data,
          body: content,
          slug: slug,
          // date: date, // 마지막 수정 일자를 순서로 블로그를 정렬함
        };
      })
  );

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyPosts ? thirdPartyPosts : []),
  ];

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter(post => post !== null)
    .sort((a: any, b: any) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    );

  return filtered;
});

export default getPosts;

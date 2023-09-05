'use client';

import Link from 'next/link';

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map((post: any) => {
        return (
          <div key={`post-item-${post.slug}`}>
            <Link href={`/${post.slug}`}>Go to the post</Link>
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.date}</div>
          </div>
        );
      })}
    </>
  );
};

export default PostsList;

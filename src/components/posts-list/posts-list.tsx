'use client';

import dateToString from 'lib/dateToString';
import themedPalette from 'styles/themes/themed-palette';
import Link from 'next/link';
import { styled } from 'styled-components';

const PostsList = ({ pinnedPosts, posts }) => {
  return (
    <Container>
      {pinnedPosts.slice(0).map((post: any) => {
        return (
          <PostContainer key={`${post.slug}`}>
            <PostTitle>
              <PostLink href={post.isThirdParty ? post.href! : `/${post.slug}`}>
                {post.title}
              </PostLink>
            </PostTitle>
            <PostDate>
              <PostTime dateTime={dateToString(new Date(post.date))}>
                {post.date ? dateToString(new Date(post.date)) : ''}
              </PostTime>
            </PostDate>
            <PostDescription>{post.description || ''}</PostDescription>
            <PostReadMore>
              <PostReadMoreLink
                href={post.isThirdParty ? post.href! : `/${post.slug}`}
              >
                더 읽어보기
              </PostReadMoreLink>
            </PostReadMore>
          </PostContainer>
        );
      })}

      {posts.slice(0).map((post: any) => {
        return (
          <PostContainer key={`${post.slug}`}>
            <PostTitle>
              <PostLink href={post.isThirdParty ? post.href! : `/${post.slug}`}>
                {post.title}
              </PostLink>
            </PostTitle>
            <PostDate>
              <PostTime dateTime={dateToString(new Date(post.date))}>
                {post.date ? dateToString(new Date(post.date)) : ''}
              </PostTime>
            </PostDate>
            <PostDescription>{post.description || ''}</PostDescription>
            <PostReadMore>
              <PostReadMoreLink
                href={post.isThirdParty ? post.href! : `/${post.slug}`}
              >
                더 읽어보기
              </PostReadMoreLink>
            </PostReadMore>
          </PostContainer>
        );
      })}
    </Container>
  );
};

const PostReadMoreLink = styled(Link)`
  transition-property: color, font-size;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;

  color: ${themedPalette.light_color};
  font-size: 1rem;
  text-decoration: none;

  --un-border-opacity: 1;
  border-color: rgba(75, 85, 99, 1);
  border-bottom-width: 1px;
  border-bottom-style: solid;

  &:hover {
    color: rgba(107, 114, 128, 1);
  }
`;
const PostReadMore = styled.p`
  margin: 0.75rem 0 0 0;
`;
const PostDescription = styled.div`
  margin-top: 0.75rem;
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, 1);
  @media (prefers-color-scheme: dark) {
    color: rgba(156, 163, 175, 1);
  }
  font-size: 1rem;
  line-height: 1.5rem;
`;
const PostTime = styled.time``;
const PostDate = styled.p`
  margin: 0;
  color: rgba(107, 114, 128, 0.8);

  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;
const PostLink = styled(Link)`
  cursor: pointer;

  transition-property: color, color;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;

  color: ${themedPalette.color};
  text-decoration: none;
`;
const PostTitle = styled.h3`
  margin: 0;

  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`;
const PostContainer = styled.div`
  &:not(:first-child) {
    margin-top: 3rem;
  }
`;
const Container = styled.div`
  /* padding-top: 3rem;
  @media (min-width: 639.9px) {
    padding-top: 4rem;
  } */
`;

export default PostsList;

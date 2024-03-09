'use client';

import dateToString from 'lib/dateToString';
import themedPalette from 'styles/themes/themed-palette';
import { styled } from 'styled-components';

export default function PostHeader({ title, date }) {
  return (
    <Container>
      <PostTitle>{title}</PostTitle>
      <PostDate>
        <PostTime dateTime={dateToString(new Date(date))}>
          {date ? dateToString(new Date(date)) : ''}
        </PostTime>
      </PostDate>
    </Container>
  );
}

const Container = styled.div``;

const PostTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${themedPalette.light_color};
`;

const PostTime = styled.time``;
const PostDate = styled.div`
  margin-top: 0.25rem;
  font-size: 1rem;
  font-family: 400;
  line-height: 1.5rem;
  color: ${themedPalette.color};
`;

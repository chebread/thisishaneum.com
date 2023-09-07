'use client';

import dateToString from '@lib/dateToString';
import themedPalette from '@styles/themes/themedPalette';
import { styled } from 'styled-components';

export default function PostHeader({ title, date }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Time>{dateToString(new Date(date))}</Time>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${themedPalette.light_color};
`;

const Time = styled.div`
  margin-top: 0.25rem;
  font-size: 1rem;
  font-family: 400;
  line-height: 1.5rem;
  color: ${themedPalette.color};
`;

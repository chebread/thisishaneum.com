'use client';

import styled from 'styled-components';

export default function Portfolio() {
  return (
    <Layout>
      <ProgressBar></ProgressBar>
      <Main>hello</Main>
    </Layout>
  );
}

const Main = styled.main``;
const ProgressBar = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 20px;
  width: 100%;
  background-color: #fff;
`;
const Layout = styled.div``;

'use client';

import styled from 'styled-components';

export default function Portfolio() {
  return (
    <Layout>
      <ProgressBar></ProgressBar>
      <Main>
        <div>
          <div>
            <Cover>
              <h1>
                안녕하세요
                <br />
                노우현입니다.
              </h1>
            </Cover>
          </div>
        </div>
      </Main>
    </Layout>
  );
}

const Cover = styled.section`
  display: block;
  padding-top: 1.5rem;
  margin-bottom: 3rem;
  h1 {
    margin: 0px;
    font-size: 3rem;
    font-weight: 800;
    line-height: normal;
  }
`;
const Main = styled.main`
  display: block;
  padding: 3rem 0px;
  @media (min-width: 639.9px) {
    padding: 6rem 0px;
  }
  div {
    display: block;
    max-width: 45rem;
    padding: 0px 16px;
    margin: 0px auto;
    div {
      display: block;
    }
  }
`;

const ProgressBar = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 12px;
  @media (min-width: 639.9px) {
    height: 20px;
  }
  width: 100%;
  background-color: #fff;
`;
const Layout = styled.div``;

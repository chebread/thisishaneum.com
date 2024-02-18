'use client';

import styled from 'styled-components';

const BlurLayer = () => {
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default BlurLayer;

const Layout = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: min(96px, 128px);
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  -webkit-mask-image: linear-gradient(to bottom, #000000 25%, transparent);
  mask-image: linear-gradient(to bottom, #000000 25%, transparent);
  opacity: 0.95;
`;

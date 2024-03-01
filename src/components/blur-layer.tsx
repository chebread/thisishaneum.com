'use client';
import styled from 'styled-components';

const BlurLayer = () => {
  return <Container></Container>;
};

export default BlurLayer;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: calc(
    100% + max(24px, env(safe-area-inset-left)) +
      max(24px, env(safe-area-inset-right))
  );
  height: 4rem;
  margin-bottom: calc(-1 * 4rem);
  margin-left: calc(-1 * max(24px, env(safe-area-inset-left)));
  backdrop-filter: blur(5px);
  mask-image: linear-gradient(to bottom, #000000 25%, transparent);
  opacity: 0.95;
  pointer-events: none;
  user-select: none;

  &:after {
    position: absolute;
    background: linear-gradient(to bottom, #ffffff, transparent);
    @media (prefers-color-scheme: dark) {
      @media (min-width: 639.9px) {
        background: linear-gradient(to bottom, #121212, transparent);
      }
      @media (max-width: 639.9px) {
        background: linear-gradient(to bottom, #000000, transparent);
      }
    }
    content: '';
    inset: 0;
  }
`;

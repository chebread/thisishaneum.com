import { Metadata } from 'next';
import GlobalStyles from 'styles/GlobalStyles';

export default function PortfolioLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export const metadata: Metadata = {
  title: '포트폴리오',
  description: `Cha Haneum's portfolio.`,
  openGraph: {
    title: '포트폴리오',
    description: `Cha Haneum's portfolio.`,
  },
  twitter: {
    title: '포트폴리오',
    description: `Cha Haneum's portfolio.`,
  },
};

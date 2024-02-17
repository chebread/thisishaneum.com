import StyledComponentsRegistry from 'lib/registry';
import type { Metadata, Viewport } from 'next';
import GlobalStyles from 'styles/GlobalStyles';
// import Scroll from './Scroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {/* https://github.com/vercel/next.js/issues/45187 */}
          {/* <Scroll /> */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL('https://thisishaneum.com'),
  title: {
    template: '%s',
    default: 'Cha Haneum',
  },
  description: `Cha Haneum's blog.`,
  keywords:
    '차한음, 프론트엔드 개발자, 웹 개발자, cha haneum, frontend developer, web developer',

  openGraph: {
    title: 'Cha Haneum',
    description: `Cha Haneum's blog.`,
    url: 'https://thisishaneum.com',
    siteName: "Cha Haneum's website",
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    title: 'Cha Haneum',
    description: `Cha Haneum's blog.`,
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

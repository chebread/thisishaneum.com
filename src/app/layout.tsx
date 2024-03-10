import StyledComponentsRegistry from 'lib/registry';
import type { Metadata, Viewport } from 'next';
import Scroll from 'components/scroll';

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        {/* https://github.com/vercel/next.js/issues/45187 */}
        <Scroll />
        {/* Component로 불러오면 delay 발생하여 global css로 처리함 */}
        <div className="blur-layer" aria-hidden="true" />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
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
    template: '%s | Cha Haneum',
    default: 'Cha Haneum',
  },
  description: `Cha Haneum의 블로그.`,
  keywords:
    '차한음, 프론트엔드 개발자, 웹 개발자, cha haneum, frontend developer, web developer',
  openGraph: {
    title: 'Cha Haneum',
    description: `Cha Haneum의 블로그.`,
    url: 'https://thisishaneum.com',
    siteName: "Cha Haneum's website",
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    title: 'Cha Haneum',
    description: `Cha Haneum의 블로그.`,
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

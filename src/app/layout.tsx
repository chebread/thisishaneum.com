import StyledComponentsRegistry from '@lib/registry';
import type { Metadata } from 'next';
import GlobalStyles from '@styles/GlobalStyles';

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
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://thisishaneum.com'),
  title: {
    template: '%s',
    default: 'Cha Haneum',
  },
  description: `Cha Haneum's blog.`,
  keywords: 'cha haneum, front-end developer, web developer',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
  openGraph: {
    title: 'Cha Haneum',
    description: `Cha Haneum's blog.`,
    url: 'https://thisishaneum.com',
    siteName: "Cha Haneum's website",
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: 'Cha Haneum',
    card: 'summary_large_image',
    creator: '@max_leiter',
  },
};

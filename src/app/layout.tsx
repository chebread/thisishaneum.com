import StyledComponentsRegistry from '@lib/registry';
import type { Metadata } from 'next';
import GlobalStyles from '@styles/GlobalStyles';
import Footer from '@components/Footer/Footer';

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
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Cha Haneum',
  },
  description: `Cha Haneum's blog.`,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
  openGraph: {
    title: 'Cha Haneum',
    description: `Cha Haneum's blog.`,
    url: 'https://thisishaneum.com',
    siteName: "Cha Haneum's blog",
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    title: 'Cha Haneum',
    card: 'summary_large_image',
  },
};

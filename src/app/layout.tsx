import type { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <>
          <div>
            <main>{children}</main>
          </div>
        </>
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
  // icons: {
  //   shortcut: 'https://thisishaneum.com/favicons/favicon.ico',
  // },
};

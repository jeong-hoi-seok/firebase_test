import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import { cn } from '@/lib/styleUtils';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'NextJs Boilerplate',
  description: 'nextjs Boilerplate setting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={cn(notoSansKR.variable)}>
      <body>{children}</body>
    </html>
  );
}

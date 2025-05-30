/* =======================================
 * 佐藤建装 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-05-30
 * Last updated: 2025-05-30
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';
import { Jost } from 'next/font/google';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
const jost = Jost({
  subsets: ['latin'], // 必要に応じて 'latin-ext' など追加
  weight: ['400', '500', '700'], // 必要なウェイトだけ指定
  display: 'swap', // 推奨
});
// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://satoukenso.com/')
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: ' 佐藤建装 | 熊本県水俣市にある建築・リノベーション',
      description:
        '佐藤建装は、熊本県水俣市にある建築・リノベーション会社です。20年以上の施工経験を基に、お客様のニーズやご希望を実現するため、新しいデザイン・厳選の素材により新鮮で柔軟な提案を行います。',
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: './images/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '佐藤建装 | 熊本県水俣市にある建築・リノベーションのOGP画像',
        },
      ],
    },
  }),
  title: ' 佐藤建装 | 熊本県水俣市にある建築・リノベーション',
  description: isRealProduction
    ? '佐藤建装は、熊本県水俣市にある建築・リノベーション会社です。20年以上の施工経験を基に、お客様のニーズやご希望を実現するため、新しいデザイン・厳選の素材により新鮮で柔軟な提案を行います。'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.className} ${jost.className}`}>
      <head>
        <meta
          name="robots"
          content={isRealProduction ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

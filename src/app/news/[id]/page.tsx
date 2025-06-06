/* =======================================
 * 記事詳細
 * URL: src/app/news/[id]/page.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */
import { newsData } from '@/data/newsData';
import { notFound } from 'next/navigation';
import styles from '@/styles/components/news/ContainerNewsDetail.module.scss';

export function generateStaticParams() {
  return newsData.map((item) => ({
    id: item.id,
  }));
}

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = newsData.find((item) => item.id === id);
  if (!article) return {};

  const plainText =
    typeof article.body === 'string' ? article.body : 'ニュース詳細ページです';

  return {
    title: article.title,
    description: plainText.replace(/\s+/g, ' ').trim(),
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = newsData.find((item) => item.id === id);
  if (!article) return notFound();

  const isoDate = article.date.replace(/\./g, '-');
  const date = new Date(isoDate);
  const formatted = `${date.getFullYear()}年${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}月${date.getDate().toString().padStart(2, '0')}日`;

  return (
    <section className={styles.containerNewsDetail}>
      <article>
        <h1>{article.title}</h1>
        <time dateTime={isoDate}>{formatted}</time>
        <div className={styles.boxDetails}>{article.body}</div>
      </article>
    </section>
  );
}

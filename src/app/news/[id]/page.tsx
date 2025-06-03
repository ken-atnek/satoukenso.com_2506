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

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsData.find((item) => item.id === params.id);
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

/* =======================================
 * TOPページ
 * URL: /app/page.tsx
 * Created: 2025-05-30
 * Last updated: 2025-05-30
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import ContainerFadeImage from '@/components/ContainerFadeImage';
import ContainerSlideImage from '@/components/ContainerSlideImage';
import BlockConcept from '@/components/BlockConcept';
import Link from 'next/link';
import NewsList from '@/components/news/NewsList';
import { newsData } from '@/data/newsData';

export default function Home() {
  return (
    <>
      <ContainerFadeImage />
      <section className={styles.containerConcept}>
        <article>
          <h2 className="decorationH2">
            <span>concept</span>佐藤建装のコンセプト
          </h2>
          <BlockConcept />
          <Link href="#" className={styles.itemLink}>
            <span>read more</span>
          </Link>
        </article>
      </section>
      <ContainerSlideImage />
      <section className={styles.containerNews}>
        <article>
          <h2 className="decorationH2">
            <span>news</span>新着情報
          </h2>
          <NewsList items={newsData} variant="top" />
        </article>
      </section>
    </>
  );
}

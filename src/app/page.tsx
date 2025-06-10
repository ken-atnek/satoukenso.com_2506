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
import { workList } from '@/data/workListData';
import WorkList from '@/components/WorkList';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: '佐藤建装 | 熊本県水俣市の建築・リノベーション',
    description:
      '佐藤建装のコンセプトや事業内容、会社情報をご紹介します。熊本県水俣市で20年以上の実績を持つ建築・リノベーション会社です。',
  };
};
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
          <Link href="/about/" className={styles.itemLink}>
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
      <section className={styles.containerWorks}>
        <article>
          <h2 className="decorationH2">
            <span>works</span>佐藤建装の実績
          </h2>
          <WorkList items={workList.slice(0, 3)} />
        </article>
      </section>
    </>
  );
}

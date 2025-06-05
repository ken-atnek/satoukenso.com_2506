import PageTitle from '@/components/common/PageTitle';
import bgImage from '@/assets/images/title-news-bg.webp';
import NewsList from '@/components/news/NewsList';
import { newsData } from '@/data/newsData';
import type { Metadata } from 'next';
export const generateMetadata = (): Metadata => {
  return {
    title: '新着情報 | 佐藤建装',
    description:
      '佐藤建装からのお知らせや最新情報をご案内します。施工事例、営業日、リフォームに関するご案内などを随時更新中です。',
  };
};
export default function NewsPage() {
  return (
    <>
      <PageTitle title="新着情報" titleEn="news" backgroundImage={bgImage} />
      <section className="container-news-list">
        <article>
          <NewsList items={newsData} variant="page" />
        </article>
      </section>
    </>
  );
}

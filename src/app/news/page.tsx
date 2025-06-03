/* =======================================
 * 新着情報一覧ページ
 * URL: src/app/news/page.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */
import PageTitle from '@/components/common/PageTitle';
import bgImage from '@/assets/images/title-news-bg.webp';
import NewsList from '@/components/news/NewsList';
import { newsData } from '@/data/newsData';

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

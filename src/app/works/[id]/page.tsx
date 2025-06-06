import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { workList } from '@/data/workListData';
import styles from '@/styles/components/WorkListDetail.module.scss';
import Link from 'next/link';

/* =======================================
 * 実績紹介 詳細
 * URL: src/app/works/[id]/page.tsx
 * Created: 2025-06-06
 * Last updated: 2025-06-06
 * ======================================= */

// 静的パス生成
export function generateStaticParams() {
  return workList.map((item) => ({
    id: item.id,
  }));
}

// メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = workList.find((item) => item.id === id);
  if (!article) return {};

  const plainText = article.description?.replace(/\s+/g, ' ').trim() || '';

  return {
    title: `${article.title} | 実績紹介 | 佐藤建装`,
    description: plainText,
  };
}

// 実績詳細ページ本体
export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = workList.find((item) => item.id === id);
  if (!article) return notFound();

  const BodyComponent = article.bodyComponent;

  return (
    <section className={styles.containerWorkListDetail}>
      <article>
        <Image
          src={article.heroImage}
          alt={article.title}
          className={styles.headImage}
        />
        <h1>{article.title}</h1>
        <p className={styles.sidebarH1}>{article.description}</p>
        <div className={styles.boxBody}>
          <BodyComponent />
        </div>
        <Link href="/works/" className={styles.itemLink}>
          <span>実績一覧に戻る</span>
        </Link>
      </article>
    </section>
  );
}

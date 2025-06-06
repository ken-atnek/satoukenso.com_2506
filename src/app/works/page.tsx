/* =======================================
 * 実績紹介
 * URL: src/app/works/page.tsx
 * Created: 2025-06-005
 * Last updated: 2025-06-005
 * ======================================= */
import React from 'react';
import PageTitle from '@/components/common/PageTitle';
import bgImage from '@/assets/images/title-works-bg.webp';
import { workList } from '@/data/workListData';
import WorkList from '@/components/WorkList';

import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: '実績紹介 |佐藤建装',
    description:
      '佐藤建装は熊本県水俣市を拠点に、内装・外装・空間デザイン・水回りリフォームなど幅広い施工に対応。20年以上の経験を活かし、お客様のご要望に柔軟に対応しながら、最適な空間づくりをお手伝いします。',
  };
};
export default function WorksPage() {
  return (
    <>
      <PageTitle title="実績紹介" titleEn="works" backgroundImage={bgImage} />
      <section className="container-works">
        <article>
          <WorkList items={workList} />
        </article>
      </section>
    </>
  );
}

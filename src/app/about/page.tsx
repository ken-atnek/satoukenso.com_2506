/* =======================================
 * 佐藤建装について
 * URL: src/app/about/page.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */
import React from 'react';
import PageTitle from '@/components/common/PageTitle';
import BlockConcept from '@/components/BlockConcept';
import bgImage from '@/assets/images/title-about-bg.webp';
import styles from '@/styles/PageAbout.module.scss';
import listImage01 from '@/assets/images/about/list01.webp';
import listImage02 from '@/assets/images/about/list02.webp';
import listImage03 from '@/assets/images/about/list03.webp';
import listImage04 from '@/assets/images/about/list04.webp';
import Image from 'next/image';
import type { Metadata } from 'next';

const serviceList = [
  {
    image: listImage01,
    title: '内装',
    description:
      '暮らしやすさを意識した住宅はもちろん使いやすさを考えた大規模なオフィス、デザイン性が求められる店舗などの内装工事も弊社は得意としています。\n流行のデザインも取り込みながら、空間創りのお手伝いをします。',
  },
  {
    image: listImage02,
    title: '外装',
    description:
      '弊社の外壁工事では、サイディング材の高いデザイン性を活かして光沢のあるきれいな仕上がりを実現できます。耐久性・防火性にも優れており、デザイン性を保った安全な住居の保全に繋がります。\nサイディング貼り替え、シール補修、外壁の割れの修理などのメンテナンス関連の施工もお任せください。\nその他、外壁・屋根の塗装もご依頼お受けいたします。',
  },
  {
    image: listImage03,
    title: '空間マネジメント',
    description:
      '雰囲気に合わせたクロス、安全安心かつデザイン性も意識した床材等よりご希望をかなえられるよう、多種多彩な施工を実現しています。\nまた弊社では家具メーカーとも提携。家具も含めた施工以外での空間トータルコーディネートも行っています。',
  },
  {
    image: listImage04,
    title: '水回り',
    description:
      'キッチン施行では幅も広く収納性や機能性に優れた、スムーズな導線を確保したレイアウトを意識。新しくすることで使い勝手はもちろん、家事が楽しくなるようなキッチン環境を実現します。\n他にもお風呂やトイレ等でも弊社では物件やライフスタイルに合わせた施工をご提案します。',
  },
];

export const generateMetadata = (): Metadata => {
  return {
    title: '佐藤建装について | 熊本県水俣市の建築・リノベーション',
    description:
      '佐藤建装は熊本県水俣市を拠点に、内装・外装・空間デザイン・水回りリフォームなど幅広い施工に対応。20年以上の経験を活かし、お客様のご要望に柔軟に対応しながら、最適な空間づくりをお手伝いします。',
  };
};
export default function AboutPage() {
  return (
    <>
      <PageTitle
        title="佐藤建装について"
        titleEn="about"
        backgroundImage={bgImage}
      />
      <section className={styles.containerConcept}>
        <article>
          <h2 className="decorationH2">
            <span>concept</span>佐藤建装のコンセプト
          </h2>
          <BlockConcept />
        </article>
      </section>
      <section className={styles.containerService}>
        <article>
          <h2 className="decorationH2">
            <span>service</span>私たちにできること
          </h2>
          <ul className={styles.serviceList}>
            {serviceList.map((item, index) => (
              <li key={index} className={styles.listDetail}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.wrapText}>
                  <h3>{item.title}</h3>
                  <p>
                    {item.description.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className={styles.containerCompany}>
        <article>
          <h2 className="decorationH2">
            <span>company</span>会社概要
          </h2>
          <dl>
            <div>
              <dt>会社名</dt>
              <dd>合同会社 佐藤建装</dd>
            </div>
            <div>
              <dt>本店所在地</dt>
              <dd>
                <address>
                  <span>〒867-0066</span>
                  <span>
                    熊本県水俣市古賀町2丁目10番13号<i>古賀ビル２F</i>
                  </span>
                </address>
              </dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd>
                <a href="tel:0966849796">0966-84-9796</a>
              </dd>
            </div>
            <div>
              <dt>代表者</dt>
              <dd>佐藤 輝海</dd>
            </div>
            <div>
              <dt>沿革</dt>
              <dd>
                <ul>
                  <li>
                    <span>2007年</span>
                    <span>佐藤建装</span>
                  </li>
                  <li>
                    <span>2018年</span>
                    <span>合同会社 佐藤建装設立</span>
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>創業</dt>
              <dd>2007年12月1日</dd>
            </div>
          </dl>
        </article>
      </section>
    </>
  );
}

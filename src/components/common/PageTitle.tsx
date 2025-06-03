/* =======================================
 * ページタイトル
 * URL: src/components/common/PageTitle.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */

import styles from '@/styles/components/common/PageTitle.module.scss';
import { StaticImageData } from 'next/image';
type PageHeadProps = {
  titleEn: string;
  title: string;
  backgroundImage?: StaticImageData;
};

const PageTitle = ({ title, titleEn, backgroundImage }: PageHeadProps) => {
  return (
    <>
      <section
        className={styles.containerPageHead}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage.src})`
            : undefined,
        }}
      >
        <span className={styles.h2Sidebar}>{titleEn}</span>
        <h2>{title}</h2>
      </section>
    </>
  );
};
export default PageTitle;

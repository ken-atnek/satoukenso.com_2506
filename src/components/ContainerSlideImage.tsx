/* =======================================
 * TOP スライド
 * URL:src/components/ContainerSlideImage.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-02
 * Last updated: 2025-06-02
 * ======================================= */
'use client';
import styles from '@/styles/PageTop.module.scss';

const SlideImages = [
  '/images/slide/slide01.webp',
  '/images/slide/slide02.webp',
  '/images/slide/slide03.webp',
];

const ContainerSlideImage = () => {
  return (
    <section className={styles.containerSlideImage}>
      <div className={styles.sliderTrack}>
        {[...SlideImages, ...SlideImages].map((src, index) => (
          <div
            key={index}
            className={styles.slideItem}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContainerSlideImage;

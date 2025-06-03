/* =======================================
 * TOP スライド
 * URL:src/components/ContainerFadeImage.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-02
 * Last updated: 2025-06-02
 * ======================================= */
'use client';
import styles from '@/styles/PageTop.module.scss';
import { useEffect, useState } from 'react';

const fadeImages = [
  '/images/fade/fade01.webp',
  '/images/fade/fade02.webp',
  '/images/fade/fade03.webp',
];

const ContainerFadeImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fadeImages.length);
    }, 5000); // ←秒ごとに切り替え

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.containerFadeImage}>
      {fadeImages.map((src, index) => (
        <div
          key={index}
          className={`${styles.slideImage} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className={styles.boxTitle}>
        それぞれが力強く結びつき
        <br />
        末長く続いていく
      </div>
    </section>
  );
};

export default ContainerFadeImage;

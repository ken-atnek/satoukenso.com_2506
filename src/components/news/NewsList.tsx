/* =======================================
 * ニュースページ記事一覧
 * URL: src/components/news/NewsList.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */
import React from 'react';
import { NewsItem } from '@/types/news';
import styles from '@/styles/components/news/NewsList.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  items: NewsItem[];
  variant?: 'top' | 'page';
};

const NewsList = ({ items, variant = 'page' }: Props) => {
  return (
    <ul className={`${styles.newsList} ${styles[variant]}`}>
      {items.map((item) => (
        <li key={item.id} className={styles.newsItem}>
          {variant === 'page' && (
            <Image
              src={item.thumbnail}
              alt={item.title}
              className={styles.thumbnail}
            />
          )}
          <p className={styles.date}>{item.date}</p>
          {variant === 'top' ? (
            <h3 className={styles.title}>
              <Link href={`/news/${item.id}`}>{item.title}</Link>
            </h3>
          ) : (
            <h3 className={styles.title}>{item.title}</h3>
          )}
          {variant === 'page' && (
            <Link href={`/news/${item.id}`} className={styles.readMore}>
              Read More
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NewsList;

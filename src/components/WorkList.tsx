/* =======================================
 * 実績紹介 リスト
 * URL:src/components/WorkList.tsx
 * Referenced in: src/app/page.tsx/
 * Created: 2025-06-06
 * Last updated: 2025-06-06
 * ======================================= */
import WorkCard from './WorkCard';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/components/WorkList.module.scss';

type Props = {
  items: {
    id: string;
    title: string;
    description: string;
    thumbnail: StaticImageData;
  }[];
};

export default function WorkList({ items }: Props) {
  return (
    <ul className={styles.listWorks}>
      {items.map((item) => (
        <WorkCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

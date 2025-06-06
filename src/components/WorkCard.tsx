/* =======================================
 * 実績紹介 リストブロック
 * URL:src/components/WorkCard.tsx
 * Referenced src/components/WorkList.tsx
 * Created: 2025-06-06
 * Last updated: 2025-06-06
 * ======================================= */
import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/components/WorkList.module.scss';

type Props = {
  id: string;
  title: string;
  description: string;
  thumbnail: StaticImageData;
};

export default function WorkCard({ id, title, description, thumbnail }: Props) {
  return (
    <li className={styles.boxDetail}>
      <Image src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/works/${id}`} className={styles.itemLink}>
        <span>read more</span>
      </Link>
    </li>
  );
}

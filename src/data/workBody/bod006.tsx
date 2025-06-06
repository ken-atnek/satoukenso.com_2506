import Image from 'next/image';
import DetailImg01 from '@/assets/images/works/works06-01.webp';
import DetailImg02 from '@/assets/images/works/works06-02.webp';
import DetailImg03 from '@/assets/images/works/works06-03.webp';
import DetailImg04 from '@/assets/images/works/works06-04.webp';
import DetailImg05 from '@/assets/images/works/works06-05.webp';
import DetailImg06 from '@/assets/images/works/works06-06.webp';
import DetailImg07 from '@/assets/images/works/works06-07.webp';
import DetailImg08 from '@/assets/images/works/works06-08.webp';
import DetailImg09 from '@/assets/images/works/works06-09.webp';
import DetailImg10 from '@/assets/images/works/works06-10.webp';

export default function WorkBody006() {
  return (
    <>
      <Image src={DetailImg01} alt="設計段階" />
      <p>
        Y様邸のご紹介です。
        ハイタイプのカウンターや間接照明が大人っぽい、レトロモダンなLDルーム。
        コーナースペースを利用したTVボードに、キッチンもコーナーを活かしたL型システムキッチンです。元は窓だった所が食器棚へと変貌を遂げて、広々としたくつろぎの空間が生まれました…。
      </p>
      <Image src={DetailImg02} alt="設計段階" />
      <Image src={DetailImg03} alt="設計段階" />
      <Image src={DetailImg04} alt="設計段階" />
      <Image src={DetailImg05} alt="設計段階" />
      <Image src={DetailImg06} alt="設計段階" />
      <Image src={DetailImg07} alt="設計段階" />
      <Image src={DetailImg08} alt="設計段階" />
      <Image src={DetailImg09} alt="設計段階" />
      <Image src={DetailImg10} alt="設計段階" />
    </>
  );
}

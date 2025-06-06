import Image from 'next/image';
import HeroImg01 from '@/assets/images/works/works01.webp';
import DetailImg01 from '@/assets/images/works/works01-01.webp';
import DetailImg02 from '@/assets/images/works/works01-02.webp';
import DetailImg03 from '@/assets/images/works/works01-03.webp';
import DetailImg04 from '@/assets/images/works/works01-04.webp';
import DetailImg05 from '@/assets/images/works/works01-05.webp';
import DetailImg06 from '@/assets/images/works/works01-06.webp';
import DetailImg07 from '@/assets/images/works/works01-07.webp';

export default function WorkBody001() {
  return (
    <>
      <p>
        Y様邸のご紹介です。
        ハイタイプのカウンターや間接照明が大人っぽい、レトロモダンなLDルーム。
        コーナースペースを利用したTVボードに、キッチンもコーナーを活かしたL型システムキッチンです。元は窓だった所が食器棚へと変貌を遂げて、広々としたくつろぎの空間が生まれました…。
      </p>
      <Image src={DetailImg01} alt="設計段階" />
      <Image src={DetailImg02} alt="設計段階" />
      <Image src={DetailImg03} alt="設計段階" />
      <Image src={HeroImg01} alt="設計段階" />
      <Image src={DetailImg04} alt="設計段階" />
      <Image src={DetailImg05} alt="設計段階" />
      <Image src={DetailImg06} alt="設計段階" />
      <Image src={DetailImg07} alt="設計段階" />
    </>
  );
}

import Image from 'next/image';
import DetailImg01 from '@/assets/images/works/works05-01.webp';
import DetailImg02 from '@/assets/images/works/works05-02.webp';
import DetailImg03 from '@/assets/images/works/works05-03.webp';
import DetailImg04 from '@/assets/images/works/works05-04.webp';
import DetailImg05 from '@/assets/images/works/works05-05.webp';
import DetailImg06 from '@/assets/images/works/works05-06.webp';
import DetailImg07 from '@/assets/images/works/works05-07.webp';
import DetailImg08 from '@/assets/images/works/works05-08.webp';
import DetailImg09 from '@/assets/images/works/works05-09.webp';
import DetailImg10 from '@/assets/images/works/works05-10.webp';
import DetailImg11 from '@/assets/images/works/works05-11.webp';
import DetailImg12 from '@/assets/images/works/works05-12.webp';
import DetailImg13 from '@/assets/images/works/works05-13.webp';

export default function WorkBody005() {
  return (
    <>
      <p>
        T様邸のご紹介です。 限られたスペースでもスムーズな動線を叶えた、
        斬新な斜め置きキッチンです。
        ネイビー色のシステムキッチンや、ドアもスタイ リッシュでいいですね。
      </p>
      <Image src={DetailImg01} alt="設計段階" />
      <Image src={DetailImg02} alt="設計段階" />
      <Image src={DetailImg03} alt="設計段階" />
      <Image src={DetailImg04} alt="設計段階" />
      <Image src={DetailImg05} alt="設計段階" />
      <Image src={DetailImg06} alt="設計段階" />
      <Image src={DetailImg07} alt="設計段階" />
      <Image src={DetailImg08} alt="設計段階" />
      <Image src={DetailImg09} alt="設計段階" />
      <Image src={DetailImg10} alt="設計段階" />
      <Image src={DetailImg11} alt="設計段階" />
      <Image src={DetailImg12} alt="設計段階" />
      <Image src={DetailImg13} alt="設計段階" />
    </>
  );
}

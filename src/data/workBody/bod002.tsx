import Image from 'next/image';
import DetailImg01 from '@/assets/images/works/works02-01.webp';
import DetailImg02 from '@/assets/images/works/works02-02.webp';
import DetailImg03 from '@/assets/images/works/works02-03.webp';
import DetailImg04 from '@/assets/images/works/works02-04.webp';
import DetailImg05 from '@/assets/images/works/works02-05.webp';

export default function WorkBody002() {
  return (
    <>
      <p>
        M様邸のご紹介です。壁一面のオーダーです。シックな背景に浮かぶようにそびえ立つ、ウッディなフロートタイプのオーダーテレビ壁面です。両サイドにはアクセントにアンティークライトを…。
      </p>
      <Image src={DetailImg01} alt="設計段階" />
      <Image src={DetailImg02} alt="設計段階" />
      <Image src={DetailImg03} alt="設計段階" />
      <Image src={DetailImg04} alt="設計段階" />
      <Image src={DetailImg05} alt="設計段階" />
    </>
  );
}

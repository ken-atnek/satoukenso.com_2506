import Image from 'next/image';
import DetailImg01 from '@/assets/images/works/works03-01.webp';
import DetailImg02 from '@/assets/images/works/works03-02.webp';
import DetailImg03 from '@/assets/images/works/works03-03.webp';
import DetailImg04 from '@/assets/images/works/works03-04.webp';
import DetailImg05 from '@/assets/images/works/works03-05.webp';
import DetailImg06 from '@/assets/images/works/works03-06.webp';
import DetailImg07 from '@/assets/images/works/works03-07.webp';
import DetailImg08 from '@/assets/images/works/works03-08.webp';
import DetailImg09 from '@/assets/images/works/works03-09.webp';
import DetailImg10 from '@/assets/images/works/works03-10.webp';

export default function WorkBody003() {
  return (
    <>
      <p>
        N様邸のご紹介です。 何を入れても見栄えするコレクションケースの
        ような収納棚をオーダーいただきました。
        全体的に明るいトーンで甘すぎない、大人メルヘンな空間になりました。…。
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
    </>
  );
}

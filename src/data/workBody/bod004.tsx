import Image from 'next/image';
import DetailImg01 from '@/assets/images/works/works04-01.webp';
import DetailImg02 from '@/assets/images/works/works04-02.webp';
import DetailImg03 from '@/assets/images/works/works04-03.webp';
import DetailImg04 from '@/assets/images/works/works04-04.webp';

export default function WorkBody04() {
  return (
    <>
      <p>
        F様邸のご紹介です。 ヴィンテージ感のある木目を基調とした、
        カッコ良くとも温かみのある雰囲気になりました。
      </p>
      <Image src={DetailImg01} alt="設計段階" />
      <Image src={DetailImg02} alt="設計段階" />
      <Image src={DetailImg03} alt="設計段階" />
      <Image src={DetailImg04} alt="設計段階" />
    </>
  );
}

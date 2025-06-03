/* =======================================
 * コンセプト
 * URL:src/components/BlockConcept.tsx
 * Referenced in: src/app/page.tsx/
 * Created: 2025-06-02
 * Last updated: 2025-06-02
 * ======================================= */

import styles from '@/styles/components/BlockConcept.module.scss';
import Image from 'next/image';
import LogoMark from '@/assets/images/logo-mark.webp';
const BlockConcept = () => {
  return (
    <div className={styles.boxContents}>
      <Image src={LogoMark} alt="ロゴマーク" />
      <div className={styles.wrapText}>
        <h3>
          思い思いの幸せが生まれる
          <br />
          空間創りを通じて、人々に貢献します。
        </h3>
        <p>
          佐藤建装は熊本県の県南地域を中心に、建物や住まいのお困りごとをリフォーム・リノベーションを通して解決しています。
          <br />
          住まいに関する施工に携わらせて頂いて20年以上の施工経験を基に、お客様のニーズやご希望を実現するため、新しいデザイン・厳選の素材により新鮮で柔軟な提案を行います。
          <br />
          また施工だけでなくその後のアフターメンテナンスも、お客様にとっての空間コーディネートのパートナーとして継続的にフォローをさせて頂きます。
          <br />
          「人々の暮らしや空間をより良いものに。確かな技術でたくさんの幸せを生み出すお手伝いをさせて頂くこと。」
          <br />
          それこそが私たちの幸せです。
        </p>
      </div>
    </div>
  );
};

export default BlockConcept;

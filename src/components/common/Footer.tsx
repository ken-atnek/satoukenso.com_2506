/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-04-25
 * Last updated: 2025-04-26
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
import Ban01 from '@/assets/images/ban-footer01.webp';
import Ban02 from '@/assets/images/ban-footer02.webp';
import SnsFb from '@/assets/images/sns-fb.webp';
import SnsInsta from '@/assets/images/sns-insta.webp';
import SnsLine from '@/assets/images/sns-line.webp';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <article>
        <div className={styles.boxShopInfo}>
          <div className={styles.wrapLogo}>
            <Image src={Logo} alt="佐藤建装" />
          </div>
          <address>
            <span>〒867-0066</span>
            <span>熊本県水俣市古賀町2丁目10番13号古賀ビル２F</span>
            <a href="tel:0966849796">Tel：0966-84-9796</a>
          </address>
          <nav>
            <a
              href="https://www.facebook.com/do.satokenso/"
              target="_blank"
              className={styles.snsFb}
            >
              <Image src={SnsFb} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com/sato_kenso?igshid=YmMyMTA2M2Y="
              target="_blank"
              className={styles.snsInsta}
            >
              <Image src={SnsInsta} alt="Instagram" />
            </a>
            <a
              href="https://lin.ee/0DsLJPw"
              target="_blank"
              className={styles.snsLine}
            >
              <Image src={SnsLine} alt="Line" />
            </a>
          </nav>
        </div>
        <nav className={styles.navBan}>
          <a
            href="https://partnershop.takara-standard.co.jp/"
            target="_blank"
            className={styles.itemBan}
          >
            <Image src={Ban01} alt="タカラスタンダードパートナーショップ" />
          </a>
          <a
            href="https://www.designshikaku.net/interia/kukan/"
            target="_blank"
            className={styles.itemBan}
          >
            <Image src={Ban02} alt="日本デザインプランナー協会【JDP】" />
          </a>
        </nav>
      </article>
      <nav className={styles.navMenu}>
        <Link href="/" className={styles.itemLink}>
          TOP
        </Link>
        <Link href="#" className={styles.itemLink}>
          佐藤建装について
        </Link>
        <Link href="#" className={styles.itemLink}>
          実績紹介
        </Link>
        <Link href="#" className={styles.itemLink}>
          新着情報
        </Link>
        <Link href="#" className={styles.itemLink}>
          お問い合わせ
        </Link>
      </nav>
      <div className={styles.copyright}>
        Copyright 2022 SATO KENSO All rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

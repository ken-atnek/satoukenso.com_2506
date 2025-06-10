/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 150);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Run once on mount in case already scrolled
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.containerHeader} ${isScrolled ? styles.isActive : ''}`}
    >
      <article>
        <Link href="/" className={styles.linkH1}>
          <h1>
            <Image src={Logo} alt="佐藤建装" />
          </h1>
        </Link>
        <nav
          id="headerNav"
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          <Link
            href="/"
            className={`${styles.itemLink} ${styles.isMobile}`}
            onClick={closeMenu}
          >
            TOP
          </Link>
          <Link href="/about/" className={styles.itemLink} onClick={closeMenu}>
            佐藤建装について
          </Link>
          <Link href="/works/" className={styles.itemLink} onClick={closeMenu}>
            実績紹介
          </Link>
          <Link href="/news/" className={styles.itemLink} onClick={closeMenu}>
            新着情報
          </Link>
          <Link
            href="/contact/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            お問い合わせ
          </Link>
        </nav>
      </article>
      <button
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;

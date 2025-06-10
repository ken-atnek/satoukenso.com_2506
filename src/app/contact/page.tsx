/* =======================================
 * お問い合わせ
 * URL: src/app/contact/page.tsx
 * Created: 2025-06-09
 * Last updated: 2025-06-09
 * ======================================= */

'use client';

import React, { useState, useRef } from 'react';
import PageTitle from '@/components/common/PageTitle';
import bgImage from '@/assets/images/title-contact-bg.webp';
import styles from '@/styles/PageContact.module.scss';
import Modal from '@/components/Modal';

export default function PageContact() {
  const [inquiryType, setInquiryType] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastKana, setLastKana] = useState('');
  const [firstKana, setFirstKana] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  const topRef = useRef<HTMLDivElement | null>(null);

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!lastName || !firstName || !email || !phone || !message) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('inquiryType', inquiryType);
    formData.append('name', `${lastName} ${firstName}`);
    formData.append('kana', `${lastKana} ${firstKana}`);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      const response = await fetch(
        'https://demo-satoukenso.tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setInquiryType('');
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setLastName('');
        setFirstName('');
        setLastKana('');
        setFirstKana('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div ref={topRef}>
        <PageTitle
          title="お問い合わせ"
          titleEn="contact"
          backgroundImage={bgImage}
        />
      </div>
      <section className={styles.containerContact}>
        <article>
          <h3>お問い合わせフォーム</h3>
          <p className={styles.H3Sidebar}>
            お問い合わせ有難うございます。返信まで2〜3営業日いただく場合がございますことをご了承ください。
          </p>
          <form
            className={styles.blockForm}
            onSubmit={isConfirming ? handleSubmit : handleConfirm}
          >
            {isConfirming ? (
              // ✅ 確認画面
              <div className={styles.statusConfirm}>
                <p>入力内容を確認してください。</p>
                <div>{`${lastName} ${firstName}`}</div>
                <div>{`${lastKana} ${firstKana}`}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{inquiryType}</div>
                <div>{message}</div>
                <div className={styles.box_btn}>
                  <button type="button" onClick={handleEdit}>
                    修正する
                  </button>
                  <button type="submit" disabled={loading}>
                    {loading ? '送信中…' : '送信'}
                  </button>
                </div>
              </div>
            ) : (
              // ✅ 入力画面
              <dl className={styles.blockForm}>
                <div className={styles.formName}>
                  <dt className={styles.formRequired}>お名前</dt>
                  <dd>
                    <div className={styles.boxName01}>
                      <h4>氏名</h4>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="姓"
                      />
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="名"
                      />
                    </div>
                    <div className={styles.boxName02}>
                      <h4>ふりがな</h4>
                      <input
                        type="text"
                        value={lastKana}
                        onChange={(e) => setLastKana(e.target.value)}
                        // required
                        placeholder="セイ"
                      />
                      <input
                        type="text"
                        value={firstKana}
                        onChange={(e) => setFirstKana(e.target.value)}
                        // required
                        placeholder="メイ"
                      />
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className={styles.formRequired}>お電話番号</dt>
                  <dd>
                    <input
                      type="text"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="お電話番号"
                    />
                  </dd>
                </div>
                <div>
                  <dt className={styles.formRequired}>メールアドレス</dt>
                  <dd>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="メールアドレス"
                    />
                  </dd>
                </div>
                <div className={styles.formSelect}>
                  <dt>お問い合わせ項目</dt>
                  <dd>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      // required
                    >
                      <option value="">選択してください</option>
                      <option value="内装に関して">内装に関して</option>
                      <option value="外装に関して">外装に関して</option>
                      <option value="水廻りに関して">水廻りに関して</option>
                      <option value="空間コーディネートに関して">
                        空間コーディネートに関して
                      </option>
                      <option value="その他">その他</option>
                    </select>
                  </dd>
                </div>
                <div>
                  <dt className={styles.formRequired}>お問い合わせ内容</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="お問い合わせ内容を入力してください"
                    />
                  </dd>
                </div>
                <div className={styles.box_btn}>
                  <button type="submit">確 認</button>
                </div>
              </dl>
            )}
            <p>{status}</p>
          </form>
        </article>
      </section>
      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

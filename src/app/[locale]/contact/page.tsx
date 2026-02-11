'use client';

import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const navT = useTranslations('Navigation');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = `New Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Construct mailto link
    const mailtoLink = `mailto:contact@lamaisondemaia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Reset sending state after a short delay
    setTimeout(() => {
      setIsSending(false);
    }, 1000);
  };

  return (
    <div className="page-container">
      <section className="contact-header">
        <h1 className="title-large">{navT('contact')}</h1>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{t('title')}</h2>
            <div className="info-item">
              <p className="label">{t('location')}</p>
              <p>Barcelona, Spain</p>
            </div>

            {/* 
                Email and Phone are intentionally hidden to prevent spam.
                The form below handles contact via the user's mail client.
            */}
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder={t('namePlaceholder')}
                required
                minLength={2}
              />
              <input
                type="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                required
              />
              <textarea
                name="message"
                placeholder={t('messagePlaceholder')}
                rows={5}
                required
                minLength={10}
              ></textarea>

              <button type="submit" disabled={isSending}>
                {isSending ? 'Opening Mail Client...' : t('submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

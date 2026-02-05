import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');
  const navT = await getTranslations('Navigation');

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
              <p className="label">{t('email')}</p>
              <p>maïa@proselectusa.com</p>
            </div>
            <div className="info-item">
              <p className="label">{t('phone')}</p>
              <p>+34 615 39 92 23</p>
            </div>
            <div className="info-item">
              <p className="label">{t('location')}</p>
              <p>Barcelona, Spain</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder={t('namePlaceholder')} />
            <input type="email" placeholder={t('emailPlaceholder')} />
            <textarea placeholder={t('messagePlaceholder')} rows={5}></textarea>
            <button type="submit">{t('submit')}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

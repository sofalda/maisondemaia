import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');
  const navT = await getTranslations('Navigation');

  return (
    <div className="page-container">
      <section className="about-hero">
        <h1 className="title-large">{navT('about')}</h1>
        <p className="about-tagline">{t('fullTitle')}</p>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-text-main">
            <p className="lead">{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
          </div>

          <div className="about-portrait-side">
            <div className="maia-portrait-container">
              <Image
                src="/maia_about.jpg"
                alt="Maïa Ollivier"
                width={500}
                height={700}
                className="maia-portrait"
                priority
              />
            </div>
          </div>
        </div>

        <div className="about-bottom-info">
          <div className="details-section">
            <h3>{t('expertiseTitle')}</h3>
            <ul className="expertise-list">
              <li>{t('expertise1')}</li>
              <li>{t('expertise2')}</li>
              <li>{t('expertise3')}</li>
              <li>{t('expertise4')}</li>
              <li>{t('expertise5')}</li>
            </ul>
          </div>

          <div className="details-section philosophy-section">
            <h3>{t('philosophyTitle')}</h3>
            <blockquote>
              {t('philosophyQuote')}
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

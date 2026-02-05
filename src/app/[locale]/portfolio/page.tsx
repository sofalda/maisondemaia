import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function PortfolioPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Navigation');
  const ts = await getTranslations('Services');

  const categories = [
    { id: 'events', title: ts('eventDesign') },
    { id: 'floral', title: ts('floralDesign') },
    { id: 'interior', title: ts('interiorStyling') }
  ];

  return (
    <div className="page-container">
      <section className="portfolio-header">
        <h1 className="title-large">{t('portfolio')}</h1>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} className="portfolio-section">
          <div className="section-title">
            <h2>{cat.title}</h2>
            <div className="line"></div>
          </div>
          <div className="portfolio-grid gallery-placeholder">
            <p>Coming soon: {cat.title} Gallery</p>
            {/* We will populate this once images are shared */}
          </div>
        </section>
      ))}
    </div>
  );
}

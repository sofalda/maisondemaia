import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { serviceCategories } from '@/data/projects';

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Services');

  const services = serviceCategories.map(cat => ({
    id: cat.slug,
    title: cat.id === 'events' ? t('eventDesign') :
      cat.id === 'floral' ? t('floralDesign') :
        t('interiorStyling'),
    image: cat.image
  }));

  return (
    <div className="page-container">
      <section className="services-header">
        <h1 className="title-large">{t('title')}</h1>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`} className="service-card">
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{t('explore')}</p>
            </div>
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
          </Link>
        ))}
      </section>
    </div>
  );
}

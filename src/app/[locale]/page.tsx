import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const localePromise = params;
  return <HomeScreen localePromise={localePromise} />;
}

async function HomeScreen({ localePromise }: { localePromise: Promise<{ locale: string }> }) {
  const { locale: resolvedLocale } = await localePromise;
  setRequestLocale(resolvedLocale);
  const t = await getTranslations('Index');
  const servicesT = await getTranslations('Services');

  const highlights = [
    {
      id: 'events',
      title: servicesT('eventDesign'),
      image: '/events_highlight.png',
      slug: 'event-design'
    },
    {
      id: 'floral',
      title: servicesT('floralDesign'),
      image: '/floral_highlight.png',
      slug: 'floral-design'
    },
    {
      id: 'interior',
      title: servicesT('interiorStyling'),
      image: '/interior_highlight.png',
      slug: 'interior-styling'
    }
  ];

  return (
    <main className="home-main">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-hero-title">{t('title')}</h1>
          <p className="home-hero-subtitle">{t('description')}</p>
        </div>
      </section>

      <section id="about" className="home-about-intro">
        <p className="text-soft">
          {t('aboutP1')}
        </p>
        <Link href="/about" className="cta-link">{t('explore')}</Link>
      </section>

      <section className="home-services-highlights">
        <div className="highlights-grid">
          {highlights.map((item) => (
            <Link key={item.id} href={`/services/${item.slug}`} className="highlight-card">
              <div
                className="highlight-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="highlight-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

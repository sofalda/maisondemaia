import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { serviceCategories, projects } from '@/data/projects';

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string, slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Services');

  const category = serviceCategories.find(cat => cat.slug === slug);
  if (!category) return notFound();

  const title = category.id === 'events' ? t('eventDesign') :
    category.id === 'floral' ? t('floralDesign') :
      t('interiorStyling');

  const filteredProjects = projects.filter(p => p.category === category.id);

  return (
    <div className="page-container">
      <section className="service-hero">
        <h1 className="title-large">{title}</h1>
      </section>

      <section className="projects-section">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-group">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-gallery">
              {project.images.map((img, idx) => (
                <div key={idx} className="gallery-image" style={{ backgroundImage: `url(${img})` }}></div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

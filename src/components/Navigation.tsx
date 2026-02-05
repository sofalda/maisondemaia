'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo-text">
          La Maison de Maïa
        </Link>
        <div className="nav-links">
          <Link href="/">{t('home')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/portfolio">{t('portfolio')}</Link>
          <Link href="/contact">{t('contact')}</Link>
        </div>
        <div className="lang-switcher">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={pathname}
              locale={lang.code}
              className={locale === lang.code ? 'active-lang' : ''}
            >
              {lang.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

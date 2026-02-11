'use client';

import { useState } from 'react';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo-text" onClick={closeMenu}>
          La Maison de Maïa
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link href="/">{t('home')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/portfolio">{t('portfolio')}</Link>
          <Link href="/contact">{t('contact')}</Link>
        </div>

        <div className="nav-right">
          <div className="lang-switcher desktop-only">
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

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay - Conditionally Rendered for Safety */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-nav-links">
            <Link href="/" onClick={closeMenu}>{t('home')}</Link>
            <Link href="/about" onClick={closeMenu}>{t('about')}</Link>
            <Link href="/portfolio" onClick={closeMenu}>{t('portfolio')}</Link>
            <Link href="/contact" onClick={closeMenu}>{t('contact')}</Link>

            <div className="mobile-lang-switcher">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname}
                  locale={lang.code}
                  className={locale === lang.code ? 'active-lang' : ''}
                  onClick={closeMenu}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

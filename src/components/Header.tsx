import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: '/', label: 'Главная' },
  { to: '/solutions', label: 'Решения' },
  { to: '/team', label: 'Команда' },
  { to: '/about', label: 'О нас' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => { closeMenu(); }, [location, closeMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const mobileMenu = menuOpen
    ? createPortal(
        <>
          <div className="mobile-overlay" onClick={closeMenu} />
          <nav className="mobile-nav">
            <div className="mobile-nav__header">
              <Link to="/" className="mobile-nav__logo" onClick={closeMenu}>
                <img src="/images/logo.png" alt="LabNeo" />
              </Link>
              <button className="mobile-nav__close" onClick={closeMenu} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="mobile-nav__links">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`mobile-nav__link ${location.pathname === to ? 'mobile-nav__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav__footer">
              <a href="tel:+79968158524" className="mobile-nav__phone">
                +7 (996) 815-85-24
              </a>
              <Link to="/order" className="mobile-nav__cta" onClick={closeMenu}>
                Оставить заявку
              </Link>
            </div>
          </nav>
        </>,
        document.body
      )
    : null;

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`}>
      <div className="hdr__inner">
        <Link to="/" className="hdr__logo">
          <img src="/images/logo.png" alt="LabNeo" className="hdr__logo-img" />
        </Link>

        <nav className="hdr__nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hdr__link ${location.pathname === to ? 'hdr__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hdr__right">
          <a href="tel:+79968158524" className="hdr__phone-desktop">
            +7 (996) 815-85-24
          </a>
          <Link to="/order" className="hdr__cta">
            Заявка
          </Link>
          <button
            className="hdr__burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
};

export default Header;

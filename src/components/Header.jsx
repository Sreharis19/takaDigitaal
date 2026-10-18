import React, { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

const links = [
  ['#projects', 'Projects'],
  ['#news', 'News'],
  ['#about', 'About'],
  ['#technology', 'Technology'],
];

const Header = ({ sitename, logo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={sitename} onClick={close}>
          <img src={logo} alt={sitename} />
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="btn btn-primary btn-sm" href="#contact" onClick={close}>
            Get in touch
          </a>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;

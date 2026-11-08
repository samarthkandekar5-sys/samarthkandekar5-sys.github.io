'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'AI & Technology', id: 'technology' },
  { label: 'Business & Strategy', id: 'operating-mindset' },
  { label: 'Ventures', id: 'ventures' },
  { label: 'Contact', id: 'contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-32% 0px -58% 0px' });
    links.forEach(link => { const target = document.getElementById(link.id); if (target) observer.observe(target); });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    document.body.classList.add('has-reveal');
    document.querySelectorAll('[data-reveal]').forEach(target => revealObserver.observe(target));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <a className="brand" href="#home" aria-label="Samarth Kandekar, home"><span className="signature-mark" aria-hidden="true"/></a>
    <nav className={`site-nav ${open ? 'is-open' : ''}`} id="mobile-navigation" aria-label="Main navigation">
      {links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}
    </nav>
    <a className="header-mail" href="mailto:samarthkandekar5@gmail.com">Say hello <ArrowUpRight size={14}/></a>
    <button ref={menuButtonRef} className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X/> : <Menu/>}</button>
  </header>;
}

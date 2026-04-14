'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono font-bold text-lg text-white tracking-tight hover:text-blue transition-colors"
        >
          JF<span className="text-blue">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  activeId === href.slice(1)
                    ? 'text-blue'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/resume"
              className="ml-2 px-4 py-1.5 rounded-lg text-sm border border-white/20 text-white/80 hover:border-blue/50 hover:text-blue hover:bg-blue/5 transition-all"
            >
              View Resume
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-white/[0.07] bg-bg/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="block py-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-white/[0.07]">
            <Link
              href="/resume"
              onClick={closeMenu}
              className="block py-2.5 text-sm text-blue"
            >
              View Resume →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

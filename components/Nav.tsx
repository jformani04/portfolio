'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-15% 0px -45% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-semibold tracking-[0.2em] text-white">
          JF<span className="text-blue">.</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map(({ href, label }) => {
            const active = activeId === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active
                    ? 'bg-white/[0.05] text-white'
                    : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {label}
              </a>
            );
          })}
          <Link href="/resume" className="btn btn-outline btn-sm ml-2">
            View Resume
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="grid gap-2">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {label}
              </a>
            ))}
            <Link
              href="/resume"
              onClick={closeMenu}
              className="btn btn-primary mt-3 w-full"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

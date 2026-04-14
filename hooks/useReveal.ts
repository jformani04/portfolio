'use client';

import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const targets = container.querySelectorAll<HTMLElement>('.reveal');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return ref;
}

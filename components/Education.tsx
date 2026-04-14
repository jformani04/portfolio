'use client';

import { useReveal } from '@/hooks/useReveal';

export default function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <div className="section-kicker">05. Education</div>
        <h2 className="section-heading">Academic Foundation</h2>
        <p className="section-sub">
          Coursework and training that support my path into data engineering and backend systems.
        </p>

        <div ref={ref} className="mt-12">
          <div className="reveal panel p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue/20 bg-blue/10 text-sm font-semibold text-blue">
                  AU
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Ashland University</h3>
                  <p className="mt-1 text-white/60">Bachelor of Science in Computer Science</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                    Focused on software engineering, systems thinking, and practical technical problem solving.
                  </p>
                </div>
              </div>

              <div className="space-y-3 md:text-right">
                <div className="tag tag-blue">B.S. Computer Science</div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                  August 2023 - May 2026 (Expected)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

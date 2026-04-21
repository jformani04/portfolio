'use client';

import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-kicker">01. About</div>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start" ref={ref}>
          <div className="reveal">
            <h2 className="section-heading">A practical builder with a systems mindset.</h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-white/60">
              <p>
                I am a Computer Science student at Ashland University with a strong interest in
                turning complex technical problems into thoughtful, reliable software solutions.
                My background in IT support taught me how systems behave in the real world and
                how to troubleshoot with patience, structure, and clarity.
              </p>
              <p>
                That foundation now carries into my software work. I enjoy building data
                workflows, backend services, and scalable application architecture that stay
                maintainable as projects grow. I care about clean implementation, clear user
                experience, and engineering choices that hold up over time.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { value: '3+', label: 'Years of CS study' },
                { value: '2+', label: 'Years of IT support experience' },
              ].map(({ value, label }) => (
                <div key={label} className="card card-hover p-5">
                  <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
                  <p className="mt-2 text-sm text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="panel p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/30 to-purple/20 text-lg font-semibold text-white">
                  JF
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
                    Profile
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">Focused on scalable engineering</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { label: 'Status', value: 'Available' },
                  { label: 'Focus', value: 'Data Engineering' },
                  { label: 'Based In', value: 'Ohio, USA' },
                  { label: 'Education', value: 'B.S. Computer Science' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-white/80">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue/20 bg-blue/10 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-blue/80">
                  Strengths
                </p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Fullstack development, API design, and analytics — building end-to-end systems
                  with clean architecture and data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

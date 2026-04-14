'use client';

import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">01 — About</div>

        <div className="grid md:grid-cols-[1fr_320px] gap-12 mt-2" ref={ref}>
          {/* Text */}
          <div className="reveal">
            <h2 className="section-heading">Who I Am</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-[15px]">
              <p>
                I&apos;m a Computer Science student at Ashland University with a passion for
                turning complex data challenges into elegant engineering solutions. My
                background in IT Support gave me hands-on experience troubleshooting
                systems and understanding infrastructure at a practical level — skills
                that directly inform how I design reliable, fault-tolerant data systems.
              </p>
              <p>
                I&apos;m now channeling that foundation into data engineering, building
                pipelines that ingest, transform, and surface insights from raw data.
                I care deeply about scalability, clean architecture, and writing code
                that&apos;s maintainable long after the initial build.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { num: '3+', label: 'Years CS Study' },
                { num: '2+', label: 'Years IT Support' },
              ].map(({ num, label }) => (
                <div key={label} className="card p-5 rounded-xl">
                  <div className="text-2xl font-bold text-white mb-0.5">{num}</div>
                  <div className="text-xs text-white/40 font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="reveal reveal-delay-1">
            <div className="card rounded-2xl p-6 h-full">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{ background: 'conic-gradient(from 0deg, #4f9cf9, #a855f7, #2dd4bf, #4f9cf9)' }}
                  />
                  <div className="absolute inset-0.5 rounded-full bg-surface flex items-center justify-center">
                    <span className="font-mono font-bold text-lg text-white/70">JF</span>
                  </div>
                </div>
              </div>

              {/* Info rows */}
              <div className="divide-y divide-white/[0.06]">
                {[
                  { label: 'Status',    value: 'Available',          green: true },
                  { label: 'Focus',     value: 'Data Engineering' },
                  { label: 'Location',  value: 'Ohio, USA' },
                  { label: 'Education', value: 'B.S. Computer Science' },
                ].map(({ label, value, green }) => (
                  <div key={label} className="flex justify-between items-center py-3 text-sm">
                    <span className="text-white/40 font-mono text-xs">{label}</span>
                    {green ? (
                      <span className="flex items-center gap-1.5 text-green text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                        {value}
                      </span>
                    ) : (
                      <span className="text-white/70 text-xs">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

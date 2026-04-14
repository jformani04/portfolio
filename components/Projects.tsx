'use client';

import { useReveal } from '@/hooks/useReveal';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">03 — Projects</div>
        <h2 className="section-heading">What I&apos;ve Built</h2>
        <p className="section-sub mb-12">
          Selected projects demonstrating mobile development, data engineering, and full-stack systems.
        </p>

        <div ref={ref} className="space-y-5">
          {/* Featured */}
          <div className="reveal relative card rounded-2xl p-6 sm:p-8 border-blue/20 overflow-hidden">
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(79,156,249,0.08) 0%, transparent 70%)' }}
              aria-hidden
            />

            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse-dot" />
              <span className="font-mono text-xs text-blue/80 tracking-widest uppercase">Featured · In Progress</span>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Fishing Analytics — Mobile App
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-lg">
                  An AI-powered mobile application built with Expo (React Native) featuring
                  real-time data processing, predictive analytics, and personalized user
                  insights. Ingests environmental and catch data, runs transformation
                  pipelines, and surfaces actionable recommendations to help anglers
                  find optimal fishing conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    ['Python',        'blue'],
                    ['React Native',  'blue'],
                    ['Expo',          'blue'],
                    ['SQL',           'purple'],
                    ['REST APIs',     'purple'],
                    ['Analytics',     'teal'],
                    ['AI / ML',       'teal'],
                  ].map(([label, color]) => (
                    <span key={label} className={`tag tag-${color}`}>{label}</span>
                  ))}
                </div>
                <a
                  href="https://github.com/jformani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <GithubIcon /> View Code
                </a>
              </div>

              {/* Pipeline visual */}
              <div className="hidden lg:flex flex-col gap-3 items-center">
                {[
                  { label: 'Ingest',    active: false },
                  { label: 'Transform', active: false },
                  { label: 'Analyze',   active: true },
                ].map(({ label, active }, i) => (
                  <div key={label} className="flex flex-col items-center">
                    <div
                      className={`w-28 h-14 rounded-xl border flex items-center justify-center text-xs font-mono font-medium transition-all ${
                        active
                          ? 'border-blue/50 bg-blue/10 text-blue'
                          : 'border-white/10 bg-white/[0.03] text-white/50'
                      }`}
                    >
                      {label}
                    </div>
                    {i < 2 && <div className="w-px h-4 bg-white/10 mt-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* VoiceUp */}
            <div className="reveal reveal-delay-1 card rounded-2xl p-6 hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <a
                  href="https://github.com/jformani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/70 transition-colors"
                  title="View Code"
                >
                  <GithubIcon />
                </a>
              </div>

              <h3 className="text-base font-semibold text-white mb-2">VoiceUp Athletics</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A scalable multi-tenant SaaS platform with role-based access control,
                REST APIs, and backend systems designed for athletic program management,
                team communication, and analytics.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[
                  ['Node.js',    'purple'],
                  ['Express',    'purple'],
                  ['TypeScript', 'blue'],
                  ['REST API',   'teal'],
                  ['RBAC',       'teal'],
                ].map(([label, color]) => (
                  <span key={label} className={`tag tag-${color}`}>{label}</span>
                ))}
              </div>
              <a
                href="https://github.com/jformani"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                View Code
              </a>
            </div>

            {/* Coming soon */}
            <div className="reveal reveal-delay-2 card rounded-2xl p-6 opacity-60 hover:opacity-80 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-white/30 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white/60 mb-2">More Coming Soon</h3>
              <p className="text-white/35 text-sm leading-relaxed mb-4">
                Additional projects in development. Follow on GitHub for updates.
              </p>
              <span className="tag tag-dim">In Progress</span>
              <div className="mt-4">
                <a
                  href="https://github.com/jformani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

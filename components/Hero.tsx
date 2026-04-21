'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 18% 28%, rgba(79,156,249,0.16), transparent 22%), radial-gradient(circle at 82% 24%, rgba(168,85,247,0.14), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 28%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_420px]">
          <div className="max-w-3xl">
            <div className="eyebrow animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-green animate-pulse-dot" />
              Open to opportunities
            </div>

            <p
              className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-blue/80 animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Computer Science Student + Aspiring Data Engineer
            </p>

            <h1
              className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: '140ms' }}
            >
              Jason Formani
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              I build clean, reliable software experiences with a focus on data pipelines,
              backend systems, and technical foundations that scale.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <Link href="/resume" className="btn btn-outline">
                <ResumeIcon />
                View Resume
              </Link>
              <a
                href="https://github.com/jformani04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </div>

          <div
            className="panel animate-fade-up p-6 sm:p-8"
            style={{ animationDelay: '360ms' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
                  Current Focus
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Building data-driven systems</h2>
              </div>
              <div className="rounded-2xl border border-blue/20 bg-blue/10 px-3 py-2 font-mono text-xs text-blue">
                2026
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Primary Track', value: 'Data Engineering' },
                { label: 'Working Style', value: 'Efficient + Practical' },
                { label: 'Strengths', value: 'Fullstack, APIs, Analytics' },
                { label: 'Location', value: 'Ohio, USA' },
              ].map(({ label, value }) => (
                <div key={label} className="card p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-white/80">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-bg/70 p-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
                  Project Snapshot
                </p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple/12 text-purple">
                  <CodePulseIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Analytics + Mobile App Workflow</p>
                  <p className="mt-1 text-sm text-white/50">
                    Ingest, transform, and surface useful insights from real-world data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-white/35 sm:flex"
          aria-hidden
        >
          <div className="h-px w-12 bg-white/20" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em]">Scroll</span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CodePulseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="m4 12 3 0 2-5 4 10 2-5 5 0" />
    </svg>
  );
}

'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none"
        aria-hidden
      />
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,156,249,0.12) 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-white/60 font-mono mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
          Open to opportunities
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          Jason Formani
        </h1>

        <p
          className="text-lg sm:text-xl text-white/50 font-mono mb-6 animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          Computer Science Student
          <span className="mx-3 text-white/20">|</span>
          Aspiring Data Engineer
        </p>

        <p
          className="text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '240ms' }}
        >
          Building scalable data pipelines and backend systems that transform
          raw data into actionable insights.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: '320ms' }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="https://github.com/jformani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GithubIcon />
            GitHub
          </a>
          <Link href="/resume" className="btn btn-ghost">
            <ResumeIcon />
            View Resume
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 animate-fade-up"
          style={{ animationDelay: '500ms' }}
          aria-hidden
        >
          <div className="w-px h-8 bg-white/50 animate-scroll-line origin-top" />
          <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

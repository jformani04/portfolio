import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Anglr — Jason Formani',
  description:
    'Anglr is an AI-powered fishing analytics mobile app built with Expo and React Native, featuring real-time data processing, predictive analytics, and personalized fishing insights.',
};

const techStack = [
  { category: 'Mobile', items: ['React Native', 'Expo'], color: 'blue' },
  { category: 'Backend & Data', items: ['Python', 'SQL', 'REST APIs', 'Supabase'], color: 'purple' },
  { category: 'Intelligence', items: ['AI / ML', 'Analytics'], color: 'teal' },
] as const;

const features = [
  {
    icon: <DataIcon />,
    title: 'Environmental Data Ingestion',
    desc: 'Pulls real-time weather, water temperature, barometric pressure, and moon phase data to build a comprehensive environmental profile for each session.',
  },
  {
    icon: <PipelineIcon />,
    title: 'Transformation Pipelines',
    desc: 'Catch and environmental data flows through automated Python pipelines that normalize, enrich, and prepare signals for the prediction layer.',
  },
  {
    icon: <InsightIcon />,
    title: 'Predictive Recommendations',
    desc: "ML models surface personalized condition scores and time-of-day recommendations tailored to each angler's historical catch patterns.",
  },
  {
    icon: <ProfileIcon />,
    title: 'Personalized User Insights',
    desc: 'Tracks catch history, species breakdowns, and success rates over time — turning raw logs into actionable trends unique to each user.',
  },
];

export default function AnglrDemo() {
  return (
    <div
      className="min-h-screen bg-bg font-sans text-white antialiased"
      style={{
        backgroundImage:
          'radial-gradient(circle at top, rgba(79,156,249,0.10), transparent 28%), radial-gradient(circle at 80% 20%, rgba(45,212,191,0.08), transparent 22%)',
      }}
    >
      {/* Minimal header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-mono text-lg font-semibold tracking-[0.2em] text-white">
            JF<span className="text-blue">.</span>
          </Link>
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeftIcon />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="pt-[4.5rem]">
        {/* Hero */}
        <section className="section-shell">
          <div className="section-inner">
            <div className="max-w-3xl">
              <div className="section-kicker">Project Case Study</div>

              {/* App icon */}
              <div className="mt-2 mb-6">
                <Image
                  src="/anglr-icon.png"
                  alt="Anglr app icon"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* Status badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag tag-blue">Featured Project</span>
                <span className="eyebrow">
                  <span
                    className="h-2 w-2 rounded-full animate-pulse-dot"
                    style={{ backgroundColor: '#f59e0b' }}
                  />
                  In Progress
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Anglr
              </h1>
              <p className="mt-2 font-mono text-sm text-teal/70 tracking-wide">
                Fishing Analytics · Mobile App · AI-Powered
              </p>
              <p className="section-sub mt-6">
                An AI-powered mobile application built with Expo and React Native that ingests
                environmental and catch data, runs transformation pipelines, and surfaces actionable
                recommendations to help anglers find optimal fishing conditions.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {['Python', 'React Native', 'Expo', 'SQL', 'Supabase', 'REST APIs', 'Analytics', 'AI / ML'].map((tag) => (
                  <span
                    key={tag}
                    className={`tag ${
                      ['Python', 'React Native', 'Expo'].includes(tag)
                        ? 'tag-blue'
                        : ['SQL', 'Supabase', 'REST APIs'].includes(tag)
                        ? 'tag-purple'
                        : 'tag-teal'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/jformani04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
                <Link href="/#projects" className="btn btn-ghost btn-sm">
                  <ArrowLeftIcon />
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* In Progress Banner */}
        <div className="border-y border-white/[0.06] bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-full animate-pulse-dot"
                style={{ backgroundColor: '#f59e0b' }}
              />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/50">
                Active Development
              </p>
              <span className="hidden text-white/20 sm:inline">·</span>
              <p className="text-sm text-white/40">
                Anglr is currently in active development. Features and screenshots are subject to change.
              </p>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <section className="section-shell section-shell-muted">
          <div className="section-inner">
            <div className="section-kicker">App Preview</div>
            <h2 className="section-heading">Interface Overview</h2>
            <p className="section-sub">
              Core screens of the Anglr mobile experience — from dashboard to insights.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                { label: 'Dashboard', desc: 'Live condition scores and session summary at a glance' },
                { label: 'Analytics', desc: 'Charts, catch trends, and historical pattern breakdowns' },
                { label: 'Recommendations', desc: 'AI-generated fishing windows with confidence ratings' },
              ].map(({ label, desc }) => (
                <div key={label} className="card flex flex-col overflow-hidden">
                  <div
                    className="relative flex items-center justify-center bg-surface2 border-b border-white/[0.06]"
                    style={{ aspectRatio: '9/16', maxHeight: '340px' }}
                  >
                    <div className="flex flex-col items-center gap-3 p-8 text-center">
                      <Image
                        src="/anglr-icon.png"
                        alt="Anglr"
                        width={56}
                        height={56}
                        className="rounded-xl opacity-60 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                      />
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
                        Coming Soon
                      </p>
                    </div>
                    {/* In progress overlay pill */}
                    <span
                      className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
                      style={{
                        borderColor: 'rgba(245,158,11,0.25)',
                        backgroundColor: 'rgba(245,158,11,0.08)',
                        color: 'rgba(245,158,11,0.8)',
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
                        style={{ backgroundColor: '#f59e0b' }}
                      />
                      WIP
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-medium text-white">{label}</p>
                    <p className="mt-1.5 text-sm text-white/50">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-shell">
          <div className="section-inner">
            <div className="section-kicker">Capabilities</div>
            <h2 className="section-heading">Key Features</h2>
            <p className="section-sub">
              Purpose-built modules that turn raw data into actionable fishing intelligence.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="card card-hover p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-blue">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/50">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Pipeline */}
        <section className="section-shell section-shell-muted">
          <div className="section-inner">
            <div className="section-kicker">Architecture</div>
            <h2 className="section-heading">How Anglr Works</h2>
            <p className="section-sub">
              A three-stage pipeline from raw signal to user-facing insight.
            </p>

            <div className="mt-12">
              <div className="panel overflow-hidden p-6 sm:p-8 lg:p-10">
                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    {
                      step: '01',
                      label: 'Ingest Data',
                      desc: 'Environmental APIs, manual catch logs, and sensor readings are collected and normalized.',
                      color: 'blue',
                    },
                    {
                      step: '02',
                      label: 'Transform Signals',
                      desc: 'Python pipelines clean, enrich, and aggregate data — computing derived features for modeling.',
                      color: 'teal',
                      active: true,
                    },
                    {
                      step: '03',
                      label: 'Surface Insights',
                      desc: 'ML models score conditions and push personalized recommendations to the mobile UI.',
                      color: 'purple',
                    },
                  ].map(({ step, label, desc, color, active }) => (
                    <div
                      key={step}
                      className={`rounded-2xl border p-5 ${
                        active
                          ? 'border-teal/25 bg-teal/[0.08]'
                          : 'border-white/10 bg-white/[0.03]'
                      }`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
                        Step {step}
                      </p>
                      <p className={`mt-3 text-base font-semibold text-${color}`}>{label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/50">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-shell">
          <div className="section-inner">
            <div className="section-kicker">Technology</div>
            <h2 className="section-heading">Tech Stack</h2>
            <p className="section-sub">
              Built with modern tooling across mobile, backend, and data layers.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {techStack.map(({ category, items, color }) => (
                <div key={category} className="card p-6">
                  <p className={`font-mono text-xs uppercase tracking-[0.24em] text-${color}/70`}>
                    {category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className={`tag tag-${color}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-shell section-shell-muted">
          <div className="section-inner text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Follow Anglr&apos;s progress
            </h2>
            <p className="mt-4 text-white/55">
              The project is actively being built. Check GitHub for the latest updates.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/jformani04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <GithubIcon />
                GitHub Profile
              </a>
              <Link href="/#projects" className="btn btn-outline">
                <ArrowLeftIcon />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            JF<span className="text-blue">.</span>
          </Link>
          <p className="text-sm text-white/40">Designed and built by Jason Formani · 2026</p>
          <a
            href="https://github.com/jformani04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 transition-colors hover:text-white"
          >
            <GithubIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ── Icons ─────────────────────────────────────────────────── */

function ArrowLeftIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function PipelineIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M3 6h18M3 12h18M3 18h18" />
      <circle cx="7" cy="6" r="2" fill="currentColor" fillOpacity={0.3} />
      <circle cx="17" cy="12" r="2" fill="currentColor" fillOpacity={0.3} />
      <circle cx="12" cy="18" r="2" fill="currentColor" fillOpacity={0.3} />
    </svg>
  );
}

function InsightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

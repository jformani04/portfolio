'use client';

import { useReveal } from '@/hooks/useReveal';

const featuredTags = [
  ['Python', 'blue'],
  ['React Native', 'blue'],
  ['Expo', 'blue'],
  ['SQL', 'purple'],
  ['REST APIs', 'purple'],
  ['Analytics', 'teal'],
  ['AI / ML', 'teal'],
] as const;

const secondaryProjects = [
  {
    title: 'VoiceUp Athletics',
    description:
      'A scalable multi-tenant SaaS platform with role-based access control, REST APIs, and backend systems designed for athletic program management, team communication, and analytics.',
    tags: [
      ['Node.js', 'purple'],
      ['Express', 'purple'],
      ['TypeScript', 'blue'],
      ['REST API', 'teal'],
      ['RBAC', 'teal'],
    ] as const,
  },
  {
    title: 'More Coming Soon',
    description:
      'Additional projects are in development. Follow along on GitHub for upcoming builds and updates.',
    tags: [['In Progress', 'dim']] as const,
  },
];

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-kicker">03. Projects</div>
        <h2 className="section-heading">Selected Work</h2>
        <p className="section-sub">
          Projects that highlight product thinking, backend foundations, and data-oriented problem solving.
        </p>

        <div ref={ref} className="mt-12 space-y-6">
          <article className="reveal panel overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_280px] lg:items-center">
              <div>
                <div className="tag tag-blue">Featured Project</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Fishing Analytics - Mobile App
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                  An AI-powered mobile application built with Expo and React Native featuring
                  real-time data processing, predictive analytics, and personalized user insights.
                  It ingests environmental and catch data, runs transformation pipelines, and
                  surfaces actionable recommendations to help anglers find optimal fishing conditions.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {featuredTags.map(([label, color]) => (
                    <span key={label} className={`tag tag-${color}`}>
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://github.com/jformani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <GithubIcon />
                    View Code
                  </a>
                </div>
              </div>

              <div className="card bg-bg/70 p-5 sm:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
                  Workflow
                </p>
                <div className="mt-6 space-y-4">
                  {['Ingest Data', 'Transform Signals', 'Surface Insights'].map((step, index) => (
                    <div
                      key={step}
                      className={`rounded-2xl border px-4 py-4 ${
                        index === 1
                          ? 'border-blue/25 bg-blue/10 text-white'
                          : 'border-white/10 bg-white/[0.03] text-white/70'
                      }`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                        Step {index + 1}
                      </p>
                      <p className="mt-2 text-sm font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {secondaryProjects.map(({ title, description, tags }, index) => (
              <article
                key={title}
                className={`reveal card card-hover flex h-full flex-col p-6 sm:p-7 ${
                  index === 0 ? 'reveal-delay-1' : 'reveal-delay-2'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/50">{description}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-white/40">
                    <FolderIcon />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map(([label, color]) => (
                    <span key={label} className={`tag tag-${color}`}>
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://github.com/jformani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm ${title === 'VoiceUp Athletics' ? 'btn-outline' : 'btn-ghost'}`}
                  >
                    View Code
                  </a>
                </div>
              </article>
            ))}
          </div>
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

function FolderIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

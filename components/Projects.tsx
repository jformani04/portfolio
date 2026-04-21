'use client';

import { useReveal } from '@/hooks/useReveal';

const featuredTags = [
  ['Python', 'blue'],
  ['React Native', 'blue'],
  ['Expo', 'blue'],
  ['SQL', 'purple'],
  ['Supabase', 'purple'],
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
    button: {
      label: 'Visit Website',
      href: 'https://polite-bay-078ad520f.1.azurestaticapps.net/',
      external: true,
    },
  },
  {
    title: 'More Coming Soon',
    description:
      'Additional projects are in development. Follow along on GitHub for upcoming builds and updates.',
    tags: [['In Progress', 'dim']] as const,
    button: null,
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
                  Anglr — Fishing Analytics App
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
                    href="/projects/fishing-analytics"
                    className="btn btn-primary btn-sm"
                  >
                    <PlayIcon />
                    View Demo
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
            {secondaryProjects.map(({ title, description, tags, button }, index) => (
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

                {button && (
                  <div className="mt-8">
                    <a
                      href={button.href}
                      {...(button.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="btn btn-outline btn-sm"
                    >
                      {button.label}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.14v14l11-7-11-7z" />
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

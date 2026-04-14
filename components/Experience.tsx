'use client';

import { useReveal } from '@/hooks/useReveal';

const experience = [
  {
    role: 'IT Support Specialist',
    org: 'Ashland University',
    date: 'January 2026 - Present',
    current: true,
    bullets: [
      'Provide technical support for faculty, staff, and students across campus systems.',
      'Manage hardware and software troubleshooting, network diagnostics, and account provisioning.',
      'Document and resolve tickets using ITSM workflows, consistently reducing resolution time.',
    ],
    tags: ['Windows', 'Networking', 'ITSM', 'Active Directory'],
  },
  {
    role: 'IT Support Technician Intern',
    org: 'Reliable Solutions Group',
    date: 'Summer 2025',
    current: false,
    bullets: [
      'Supported managed service operations for small to mid-sized business clients.',
      'Assisted with infrastructure setup, patch management, and security configurations.',
      'Gained exposure to cloud infrastructure and remote support tooling.',
    ],
    tags: ['MSP', 'Cloud', 'Patch Management'],
  },
];

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-shell section-shell-muted">
      <div className="section-inner">
        <div className="section-kicker">04. Experience</div>
        <h2 className="section-heading">Professional Experience</h2>
        <p className="section-sub">
          Roles that sharpened my technical support instincts and system-level thinking.
        </p>

        <div ref={ref} className="relative mt-12">
          <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-white/10 sm:block" />
          <div className="space-y-8">
            {experience.map(({ role, org, date, current, bullets, tags }, index) => (
              <article
                key={role}
                className={`reveal relative sm:pl-12 ${index > 0 ? 'reveal-delay-1' : ''}`}
              >
                <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-blue/25 bg-bg sm:flex">
                  <span className={`h-3 w-3 rounded-full ${current ? 'bg-blue' : 'bg-white/30'}`} />
                </div>

                <div className="panel p-6 sm:p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-white">{role}</h3>
                        {current ? <span className="tag tag-blue">Current</span> : null}
                      </div>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-blue/80">
                        {org}
                      </p>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">{date}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/60">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/65" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="tag tag-dim">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

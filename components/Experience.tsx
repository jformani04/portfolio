'use client';

import { useReveal } from '@/hooks/useReveal';

const experience = [
  {
    role: 'IT Support Specialist',
    org: 'Ashland University',
    date: 'Jan 2026 — Present',
    current: true,
    bullets: [
      'Provide technical support for faculty, staff, and students across campus systems.',
      'Manage hardware/software troubleshooting, network diagnostics, and account provisioning.',
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
    <section id="experience" className="py-24 sm:py-32 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">04 — Experience</div>
        <h2 className="section-heading">Where I&apos;ve Worked</h2>
        <p className="section-sub mb-12">Roles that shaped my technical foundations.</p>

        <div className="space-y-5" ref={ref}>
          {experience.map(({ role, org, date, current, bullets, tags }, i) => (
            <div
              key={role}
              className={`reveal${i > 0 ? ' reveal-delay-1' : ''} card rounded-2xl p-6 sm:p-8 hover:border-white/[0.12] transition-all duration-300`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-semibold text-white">{role}</h3>
                  <p className="text-sm text-blue/80 mt-0.5">{org}</p>
                </div>
                <span
                  className={`self-start sm:self-auto font-mono text-xs px-3 py-1 rounded-full border ${
                    current
                      ? 'border-green/30 bg-green/5 text-green'
                      : 'border-white/10 bg-white/[0.03] text-white/40'
                  }`}
                >
                  {date}
                </span>
              </div>

              <ul className="space-y-2 mb-5">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-white/55">
                    <span className="text-blue/50 mt-0.5 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="tag tag-dim">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="section-label">Education</div>
          <div className="reveal card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 mt-2">
            <div className="w-14 h-14 rounded-xl bg-blue/10 border border-blue/20 text-blue font-mono font-bold text-base flex items-center justify-center shrink-0">
              AU
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white">Ashland University</h3>
              <p className="text-sm text-white/55 mt-0.5">Bachelor of Science in Computer Science</p>
              <p className="text-xs text-white/35 font-mono mt-1">August 2023 — May 2026 (Expected)</p>
            </div>
            <span className="tag tag-blue self-start sm:self-auto">B.S. CS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

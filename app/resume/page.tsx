import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume — Jason Formani',
  description: 'Resume of Jason Formani — CS Student & Aspiring Data Engineer',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Back nav */}
      <nav className="border-b border-white/[0.07] bg-bg/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="/portfolioResume.png"
              download="Jason-Formani-Resume.png"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue text-white text-sm font-medium hover:bg-blue/90 hover:shadow-[0_0_20px_rgba(79,156,249,0.4)] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16">

        {/* Header */}
        <header className="mb-10 pb-10 border-b border-white/[0.07]">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Jason Formani
          </h1>
          <p className="text-lg text-blue/80 font-mono mb-5">
            Computer Science Student · Aspiring Data Engineer
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
            <a href="mailto:jformani04@outlook.com" className="hover:text-blue transition-colors flex items-center gap-1.5">
              <EmailIcon /> jformani04@outlook.com
            </a>
            <a href="https://github.com/jformani" target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors flex items-center gap-1.5">
              <GithubIcon /> github.com/jformani
            </a>
            <a href="https://linkedin.com/in/jformani" target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors flex items-center gap-1.5">
              <LinkedinIcon /> linkedin.com/in/jformani
            </a>
            <span className="flex items-center gap-1.5">
              <LocationIcon /> Ohio, USA
            </span>
          </div>
        </header>

        {/* Summary */}
        <Section label="Summary">
          <p className="text-white/60 leading-relaxed text-[15px]">
            Computer Science student at Ashland University with a passion for building scalable
            data systems and backend services. Background in IT Support provides practical
            infrastructure knowledge that informs fault-tolerant system design. Currently building
            an AI-powered mobile application with real-time data processing and analytics.
            Seeking opportunities in data engineering and backend development.
          </p>
        </Section>

        {/* Skills */}
        <Section label="Skills">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: 'Languages',
                items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
              },
              {
                title: 'Technologies & Tools',
                items: ['React Native (Expo)', 'Node.js / Express', 'REST APIs', 'Azure', 'Git', 'SQL'],
              },
              {
                title: 'Concepts',
                items: [
                  'Data Processing & Analytics',
                  'Scalable Backend Systems',
                  'API Design & Integration',
                  'Authentication (RBAC)',
                  'Asynchronous Programming',
                ],
              },
            ].map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">{title}</h3>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-white/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section label="Experience">
          <div className="space-y-8">
            <ExpEntry
              role="IT Support Specialist"
              org="Ashland University"
              date="January 2026 — Present"
              bullets={[
                'Provide technical support for faculty, staff, and students across campus systems.',
                'Manage hardware/software troubleshooting, network diagnostics, and account provisioning.',
                'Document and resolve tickets using ITSM workflows, consistently reducing resolution time.',
              ]}
            />
            <ExpEntry
              role="IT Support Technician Intern"
              org="Reliable Solutions Group"
              date="Summer 2025"
              bullets={[
                'Supported managed service operations for small to mid-sized business clients.',
                'Assisted with infrastructure setup, patch management, and security configurations.',
                'Gained exposure to cloud infrastructure and remote support tooling.',
              ]}
            />
          </div>
        </Section>

        {/* Projects */}
        <Section label="Projects">
          <div className="space-y-8">
            <ProjectEntry
              title="Fishing Analytics — Mobile App"
              tags={['Python', 'React Native (Expo)', 'SQL', 'REST APIs', 'AI / ML']}
              desc="AI-powered mobile application built with Expo featuring real-time data processing, predictive analytics, and personalized user insights. Ingests environmental and catch data, runs transformation pipelines, and surfaces actionable fishing condition recommendations."
              href="https://github.com/jformani"
            />
            <ProjectEntry
              title="VoiceUp Athletics"
              tags={['Node.js', 'Express', 'TypeScript', 'REST API', 'RBAC']}
              desc="Scalable multi-tenant SaaS platform with role-based access control, REST APIs, and backend systems designed for athletic program management, team communication, and analytics."
              href="https://github.com/jformani"
            />
          </div>
        </Section>

        {/* Education */}
        <Section label="Education">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h3 className="text-base font-semibold text-white">Ashland University</h3>
              <p className="text-sm text-white/55 mt-0.5">Bachelor of Science in Computer Science</p>
            </div>
            <span className="text-sm text-white/40 font-mono shrink-0">Aug 2023 — May 2026 (Expected)</span>
          </div>
        </Section>

        {/* Download CTA */}
        <div className="mt-12 pt-8 border-t border-white/[0.07] flex justify-center">
          <a
            href="/portfolioResume.png"
            download="Jason-Formani-Resume.png"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue text-white font-medium hover:bg-blue/90 hover:shadow-[0_0_30px_rgba(79,156,249,0.4)] transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </main>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 pb-10 border-b border-white/[0.07] last:border-0 last:mb-0">
      <h2 className="text-xs font-mono text-blue/70 uppercase tracking-widest mb-5">{label}</h2>
      {children}
    </section>
  );
}

function ExpEntry({ role, org, date, bullets }: { role: string; org: string; date: string; bullets: string[] }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-base font-semibold text-white">{role}</h3>
          <p className="text-sm text-blue/80">{org}</p>
        </div>
        <span className="text-xs text-white/40 font-mono shrink-0">{date}</span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-white/55">
            <span className="text-blue/40 mt-0.5 shrink-0">→</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectEntry({ title, tags, desc, href }: { title: string; tags: string[]; desc: string; href: string }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-blue/70 hover:text-blue transition-colors font-mono shrink-0">
          View Code →
        </a>
      </div>
      <p className="text-sm text-white/55 leading-relaxed mb-3">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="tag tag-dim">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Icons ────────────────────────────────────────────────── */

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

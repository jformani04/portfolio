'use client';

import { useReveal } from '@/hooks/useReveal';

const contacts = [
  {
    label: 'Email',
    value: 'jformani04@outlook.com',
    href: 'mailto:jformani04@outlook.com',
    icon: <EmailIcon />,
  },
  {
    label: 'GitHub',
    value: 'github.com/jformani',
    href: 'https://github.com/jformani',
    icon: <GithubIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jformani',
    href: 'https://linkedin.com/in/jformani',
    icon: <LinkedinIcon />,
  },
];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-kicker">06. Contact</div>
          <h2 className="section-heading">Let&apos;s Connect</h2>
          <p className="section-sub mx-auto">
            Open to full-time roles, internships, and collaborative work in data engineering and backend development.
          </p>
        </div>

        <div ref={ref} className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
          {contacts.map(({ label, value, href, icon }, index) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`reveal card card-hover group p-6 text-left ${
                index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/55 transition-colors group-hover:border-blue/25 group-hover:bg-blue/10 group-hover:text-blue">
                {icon}
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">{label}</p>
              <p className="mt-3 break-all text-sm leading-7 text-white/70">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

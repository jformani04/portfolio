'use client';

import { useReveal } from '@/hooks/useReveal';

const contacts = [
  {
    label: 'Email',
    value: 'jformani04@outlook.com',
    href: 'mailto:jformani04@outlook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/jformani',
    href: 'https://github.com/jformani',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jformani',
    href: 'https://linkedin.com/in/jformani',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="section-label mx-auto w-fit">05 — Contact</div>
        <h2 className="section-heading">Let&apos;s Connect</h2>
        <p className="section-sub mx-auto mb-12">
          Open to full-time roles, internships, and collaborative projects in
          data engineering and backend development.
        </p>

        <div className="space-y-3" ref={ref}>
          {contacts.map(({ label, value, href, icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''} flex items-center gap-4 card rounded-2xl p-5 text-left hover:border-white/[0.14] hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-200 group`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 text-white/50 group-hover:text-blue group-hover:bg-blue/10 flex items-center justify-center shrink-0 transition-all duration-200">
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-white/40 font-mono mb-0.5">{label}</div>
                <div className="text-sm text-white/70 group-hover:text-white transition-colors truncate">{value}</div>
              </div>
              <svg className="w-4 h-4 text-white/20 group-hover:text-blue group-hover:translate-x-0.5 transition-all duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

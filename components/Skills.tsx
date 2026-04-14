'use client';

import { useReveal } from '@/hooks/useReveal';

const skills = [
  {
    title: 'Languages',
    color: 'blue' as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tags: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Technologies & Tools',
    color: 'purple' as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tags: ['React Native (Expo)', 'Node.js / Express', 'REST APIs', 'Azure', 'Git', 'SQL'],
  },
  {
    title: 'Concepts',
    color: 'teal' as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" />
      </svg>
    ),
    tags: [
      'Data Processing & Analytics',
      'Scalable Backend Systems',
      'API Design & Integration',
      'Authentication (RBAC)',
      'Asynchronous Programming',
    ],
  },
];

const tagClass: Record<string, string> = {
  blue:   'tag tag-blue',
  purple: 'tag tag-purple',
  teal:   'tag tag-teal',
};

const iconBg: Record<string, string> = {
  blue:   'bg-blue/10 text-blue',
  purple: 'bg-purple/10 text-purple',
  teal:   'bg-teal/10 text-teal',
};

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-heading">Technical Stack</h2>
        <p className="section-sub mb-12">Technologies and concepts I work with regularly.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" ref={ref}>
          {skills.map(({ title, color, icon, tags }, i) => (
            <div
              key={title}
              className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''} card rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconBg[color]}`}>
                {icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className={tagClass[color]}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

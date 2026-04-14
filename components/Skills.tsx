'use client';

import { useReveal } from '@/hooks/useReveal';

const skills = [
  {
    title: 'Languages',
    color: 'blue' as const,
    description: 'Core languages I rely on for application and systems work.',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Technologies',
    color: 'purple' as const,
    description: 'Tools and platforms I use to ship products and services.',
    items: ['React Native (Expo)', 'Node.js / Express', 'REST APIs', 'Azure', 'Git', 'SQL'],
  },
  {
    title: 'Concepts',
    color: 'teal' as const,
    description: 'Patterns and engineering topics I think about while building.',
    items: [
      'Data Processing & Analytics',
      'Scalable Backend Systems',
      'API Design & Integration',
      'Authentication (RBAC)',
      'Asynchronous Programming',
    ],
  },
];

const accentClass = {
  blue: 'tag-blue',
  purple: 'tag-purple',
  teal: 'tag-teal',
};

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-shell section-shell-muted">
      <div className="section-inner">
        <div className="section-kicker">02. Skills</div>
        <h2 className="section-heading">Technical Stack</h2>
        <p className="section-sub">
          A focused toolkit across languages, platforms, and engineering concepts.
        </p>

        <div ref={ref} className="mt-12 grid gap-5 lg:grid-cols-3">
          {skills.map(({ title, color, description, items }, index) => (
            <article
              key={title}
              className={`reveal card card-hover flex h-full flex-col p-6 sm:p-7 ${
                index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''
              }`}
            >
              <div className={`tag ${accentClass[color]} w-fit`}>{title}</div>
              <p className="mt-5 text-sm leading-7 text-white/50">{description}</p>
              <ul className="mt-6 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

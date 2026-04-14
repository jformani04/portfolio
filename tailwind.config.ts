import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#0a0b0f',
        surface:  '#111318',
        surface2: '#161920',
        blue:     '#4f9cf9',
        purple:   '#a855f7',
        teal:     '#2dd4bf',
        green:    '#22c55e',
      },
      fontFamily: {
        // Consume the CSS variables injected by next/font
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.4', transform: 'scale(1.5)' },
        },
        scrollLine: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%':  { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up':    'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'scroll-line':'scrollLine 2s ease-in-out infinite',
        'spin-slow':  'spinSlow 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

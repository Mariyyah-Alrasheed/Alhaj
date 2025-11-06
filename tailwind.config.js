/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Tajawal"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#8b5cf6',
        'primary-deep': '#47348f',
        midnight: '#0a0618',
        aurora: '#a78bfa',
      },
      boxShadow: {
        glow: '0 0 40px rgba(167, 139, 250, 0.3)',
        'glow-strong': '0 0 60px rgba(147, 132, 227, 0.45)',
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at center, rgba(167, 139, 250, 0.25) 0, rgba(74, 64, 120, 0.4) 35%, transparent 70%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(167, 139, 250, 0.35)' },
          '50%': { boxShadow: '0 0 30px rgba(167, 139, 250, 0.6)' },
        },
        'slow-pan': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        'slow-pan': 'slow-pan 20s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}


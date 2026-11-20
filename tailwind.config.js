/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF8F4',
          100: '#D4ECE2',
          200: '#A7D8C4',
          300: '#72BFA2',
          400: '#3D9B79',
          500: '#16684E',
          600: '#115540',
          700: '#0D4332',
          800: '#093225',
          900: '#062219',
        },
        secondary: {
          50: '#F6F3EA',
          100: '#E8E3D5',
          200: '#CFC9B8',
          300: '#9EB3A7',
          400: '#6D8579',
          500: '#4B6357',
          600: '#334E41',
          700: '#253C31',
          800: '#192C23',
          900: '#10241D',
        },
        accent: {
          50: '#F4FBF6',
          100: '#E2F5E8',
          200: '#C4EBD1',
          300: '#9CE0B4',
        },
        success: {
          50: '#EFF8F1',
          500: '#3E9A64',
          700: '#2A6E46',
        },
        warning: {
          50: '#FDF6E7',
          500: '#D19222',
          700: '#946311',
        },
        error: {
          50: '#FCEFEF',
          500: '#C2504E',
          700: '#923533',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F6F3EA',
          100: '#ECE7DA',
          200: '#D6D0C2',
          300: '#A6B5AC',
          400: '#72857B',
          500: '#4C6257',
          600: '#334E41',
          700: '#10241D',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(16, 36, 29, 0.35)',
        lift: '0 24px 48px -20px rgba(16, 36, 29, 0.48)',
        gold: '0 12px 30px -10px rgba(156, 224, 180, 0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slowZoom 14s ease-out both',
        'bounce-soft': 'bounceSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
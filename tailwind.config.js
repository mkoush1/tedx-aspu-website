/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Almarai', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
      colors: {
        'red': {
          50: '#FFF5F5',
          100: '#FED7D7',
          200: '#FEB2B2',
          300: '#FC8181',
          400: '#F56565',
          500: '#E53E3E',
          600: '#C53030',
          700: '#9B2C2C',
          800: '#822727',
          900: '#63171B',
          950: '#450A0A',
        },
        'tedx-red': {
          DEFAULT: '#E62B1E',
          50: '#FBDEDC',
          100: '#F9CAC7',
          200: '#F4A19C',
          300: '#F07971',
          400: '#EB5046',
          500: '#E62B1E',
          600: '#B82218',
          700: '#891A12',
          800: '#5B110C',
          900: '#2D0906',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'luxury-sm': '0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.08), 0 0 6px rgba(229,69,69,0.05)',
        'luxury-md': '0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.1), 0 0 12px rgba(229,69,69,0.1)',
        'luxury-lg': '0 4px 6px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.1), 0 0 16px rgba(229,69,69,0.15)',
        'luxury-xl': '0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.12), 0 0 24px rgba(229,69,69,0.2)',
      },
      backgroundImage: {
        'arabesque': "url('/patterns/arabesque.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'slide-down': 'slideDown 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'slide-left': 'slideLeft 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'fade-out': 'fadeOut 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      // Add backdrop blur values
      backdropBlur: {
        xs: '2px',
      },
      // Custom scales for subtle transformations
      scale: {
        '98': '.98',
        '102': '1.02',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.playfair').join(', '),
            },
            h2: {
              fontFamily: theme('fontFamily.playfair').join(', '),
            },
            h3: {
              fontFamily: theme('fontFamily.playfair').join(', '),
            },
            h4: {
              fontFamily: theme('fontFamily.playfair').join(', '),
            },
          },
        },
      }),
    },
  },
  plugins: [],
}

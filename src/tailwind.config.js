export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Rich color palette inspired by Arabic design
        'sand': {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD466',
          400: '#FFC533',
          500: '#FFB700',
          600: '#CC9200',
          700: '#996E00',
          800: '#664900',
          900: '#332500',
        },
        'henna': {
          50: '#FDF2F2',
          100: '#FBDFDF',
          200: '#F6B9B9',
          300: '#F19292',
          400: '#EB6C6C',
          500: '#E54545',
          600: '#D41C1C',
          700: '#AB1616',
          800: '#821111',
          900: '#590C0C',
        },
        'turquoise': {
          50: '#EFFBFB',
          100: '#D9F5F5',
          200: '#B3EBEB',
          300: '#8DE0E0',
          400: '#66D6D6',
          500: '#40CCCC',
          600: '#28A3A3',
          700: '#1E7A7A',
          800: '#145252',
          900: '#0A2929',
        },
        'midnight': {
          50: '#EEEDF1',
          100: '#D5D3DB',
          200: '#ABA6B7',
          300: '#807A93',
          400: '#5E5775',
          500: '#3C3456',
          600: '#302A45',
          700: '#241F34',
          800: '#181522',
          900: '#0C0A11',
        },
      },
      backgroundImage: {
        'arabic-pattern': "url('https://i.imgur.com/nFQzs6a.png')",
        'arabesque': "url('https://i.imgur.com/5RRqIYv.png')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}; 
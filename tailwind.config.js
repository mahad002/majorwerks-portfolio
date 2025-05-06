/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1221',
          800: '#111827',
          700: '#1F2937'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(167, 139, 250) 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgb(11, 18, 33) 0%, rgb(17, 24, 39) 50%, rgb(11, 18, 33) 100%)'
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1) rotate(120deg)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9) rotate(240deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(360deg)",
          },
        }
      },
      animation: {
        blob: "blob 20s infinite",
      },
      extend: {
        transitionDelay: {
          '2000': '2000ms',
          '4000': '4000ms',
        }
      },
    },
  },
  plugins: [],
};
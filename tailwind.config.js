/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1929',
          800: '#0F2942',
          700: '#1A3D5C'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))',
        'gradient-dark': 'linear-gradient(to bottom, rgb(10, 25, 41), rgba(88, 28, 135, 0.5), rgb(10, 25, 41))'
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        }
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: 'rgba(3,37,65, 1)',
        'blue-blur': 'rgba(3,37,65,0.9)',
      },
      textColor: {
        gray: 'rgba(255,255,255,0.6)',
      },
    },
  },
  plugins: [],
};

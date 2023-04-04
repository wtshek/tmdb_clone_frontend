/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: 'rgba(3,37,65, 1)',
        gray: 'rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};

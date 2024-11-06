/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff1e00',
          blue: '#e8f9fd',
          green: '#59ce8f',
        },
      },
    },
  },
  plugins: [],
};
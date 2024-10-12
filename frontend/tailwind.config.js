/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Paytone One',
        primary: 'Poppins',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};

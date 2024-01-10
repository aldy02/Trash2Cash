/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#FFB534',
      'primary-dark': '#F89F04',
      'secondary-light': '#C1F2B0',
      'secondary-dark': '#65B741',
      neutral: '#737373',
      'neutral-dark': '#1f2937',
      'neutral-light': '#d4d4d4',
    },
    extend: {},
  },
  plugins: [],
};

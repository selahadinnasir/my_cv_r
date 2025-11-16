/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 1. Define custom colors based on your CSS
      colors: {
        'primary-teal-dark': '#35A99C',
        'primary-teal-mid': '#53C8B6',
        'primary-teal-light': '#74D7BB',
        'accent-dark': '#363D73',
        'accent-light': '#2794B3',
        'gray-subhead': '#ccc',
      },
      // 2. Define custom font family
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // 3. Define custom spacing/sizing utilities
      spacing: {
        '5rem': '5rem',
      },
    },
  },
  plugins: [],
};

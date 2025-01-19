/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cal Sans', 'Inter var', 'sans-serif'],
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}




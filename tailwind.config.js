/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2563eb',
          green: '#10b981',
          orange: '#f59e0b',
          purple: '#8b5cf6',
          light: '#f8fafc',
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        slide: 'slide 16s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' }
        }
      }
    },
  },
  plugins: [],
}


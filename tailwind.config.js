/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "Scale": "Scale 1s infinite ease-in-out",
      },
      keyframes: {
        Scale: {
          '0%': {opacity: 1, transform: 'scale(0)'},
          '100%': {opacity: 0, transform: 'scale(1.8)'}
        }
      }
    },
  },
  plugins: [],
}


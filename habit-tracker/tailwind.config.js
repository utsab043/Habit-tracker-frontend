/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary_blue": "#007CFF",
        "neutral_gray": "#EFF3FB",
      },
      fontFamily: {
        "primary_font": ["sans-serif"],
      },
    },
  },
  plugins: [],
}
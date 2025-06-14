/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#a2d2ff",
        pastelPink: "#ffcad4",
        pastelGreen: "#caffbf",
        pastelYellow: "#ffffd2",
      },
      fontFamily: {
        sans: ["'Noto Sans KR'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

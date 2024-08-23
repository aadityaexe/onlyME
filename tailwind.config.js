/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c02723",
        secondary: "#860c0b",
        accent: "#f0a189",
        dark: "#160404",
        darkSecondary: "#440507",
        darkest: "#4a2434",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2ecc71", // heavy green
        primaryBlue: "#3498db", // medium blue
        neutralGray: "#7f8c8d", // low gray
      },
    },
  },
  plugins: [],
};

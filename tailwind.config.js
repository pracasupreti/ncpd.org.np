// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tiktok: ['"TikTok Sans"', "sans-serif"],
      },
      colors: {
        primary: "#0EA5E9",   // Tailwind's sky-500 color
        secondary: "#f97316", // Tailwind's orange-500 color (you can adjust)
      },
    },
  },
  plugins: [],
};

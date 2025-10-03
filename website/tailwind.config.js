// filepath: c:\Users\Jan\Desktop\Reuq\reuq-main-repo\tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Modrá
        second: "#9333EA", // Fialová
        third: "#F59E0B", // Oranžová
        opposite: "#64748B", // Šedá
      },
    },
  },
  plugins: [],
}
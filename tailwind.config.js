/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-chart-ng": "#0c0d36",
        "blue-white": "#fff",
        "blue-blue": "#6fa0e4",
        "blue-main-block": "#1a224c",
        "blue-bright-text": "#cce1ff",
        gray: "rgba(14, 5, 45, 0.5)",
        "blue-block-bg50": "#0b1640",
        "blue-block-bg50-50": "rgba(8, 38, 82, 0.5)",
        "blue-buttons": "#00d0fe",
        orange: "#febb05",
        palegreen: "#87f18b",
        "blue-green-400": "#00c9a5",
        "blue-red-500": "#e4364b",
        "blue-main-dim": "#3e5389",
        "blue-main-bg": "#0e052d",
        deeppink: "#e43675",
      },
      fontFamily: { "mono-captions": "'Aeonik Fono'", "par-bold": "Aeonik" },
      borderRadius: { "21xl": "40px", sm: "14px", "142xl-5": "161.5px" },
    },
    fontSize: { xs: "12px", sm: "14px", "3xs": "10px", xl: "20px" },
    screens: {
      lg: { max: "1200px" },
      md: { max: "960px" },
      sm: { max: "420px" },
    },
  },
  corePlugins: { preflight: false },
};

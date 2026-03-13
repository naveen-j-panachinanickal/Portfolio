module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: "#967E67",
        "cloud-dancer": "#F0EEE9",
        walnut: "#3D2B1F",
        "vintage-paper": "#E5E1D8",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        mono: ["'Special Elite'", "monospace"],
      },
      boxShadow: {
        skeuo: "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 30px 60px -10px rgba(0, 0, 0, 0.5)",
        neumorph: "20px 20px 60px #cdc9c4, -20px -20px 60px #ffffff",
        "neumorph-inset": "inset 10px 10px 20px #cdc9c4, inset -10px -10px 20px #ffffff",
      },
    },
  },
  plugins: [],
}

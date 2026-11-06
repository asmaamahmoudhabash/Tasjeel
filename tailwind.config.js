export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F1F6FD",
          100: "#DFEBFB",
          200: "#BFD7F7",
          300: "#92BAF2",
          400: "#609AEB",
          500: "#337DE6",
          600: "#1A66D1",
          700: "#1554AC",
          800: "#114388",
          900: "#0D3368",
          950: "#0A264D",
        },
        teal: {
          50: "#F2FDFB",
          100: "#E1FAF6",
          200: "#C2F4EE",
          300: "#97EDE1",
          400: "#67E4D4",
          500: "#3CDDC7",
          600: "#23C7B2",
          700: "#1DA593",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        orb: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(60px, -40px) scale(1.15)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        orb: "orb 16s ease-in-out infinite alternate",
        marquee: "marquee 50s linear infinite",
      },
    },
  },
};

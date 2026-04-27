/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        heading: ["Clash Display", "Satoshi", "ui-sans-serif", "system-ui"],
        body: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          navy: "#071B2E",
          royal: "#0F4C81",
          teal: "#00C9A7",
          gold: "#D4AF37",
          ink: "#0B1220",
          bg: "#F8FAFC",
        },
      },
      boxShadow: {
        lift: "0 18px 45px rgba(7, 27, 46, 0.12)",
        glow: "0 18px 55px rgba(0, 201, 167, 0.18)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sheen: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(140%)" },
        },
      },
      animation: {
        floaty: "floaty 5.5s ease-in-out infinite",
        sheen: "sheen 1.1s ease-out",
      },
    },
  },
  plugins: [],
};

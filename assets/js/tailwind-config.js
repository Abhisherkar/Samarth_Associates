tailwind.config = {
  theme: {
    extend: {
      colors: {
        canvas: "#06111f",
        panel: "#0d1b30",
        ink: "#f5f8fc",
        mist: "#9db0d0",
        teal: "#47e2c2",
        cyan: "#70b8ff",
        amber: "#d6a14d",
      },
      boxShadow: {
        premium: "0 30px 80px rgba(2, 8, 23, 0.45)",
        panel: "0 24px 100px rgba(5, 10, 20, 0.55)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        accent: ["Fraunces", "Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};

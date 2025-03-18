module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      animation: {
        spotlight: "spotlightAnimation 5s infinite",
      },
      keyframes: {
        spotlightAnimation: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
};

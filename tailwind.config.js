module.exports = {
  theme: {},
  variants: {
    margin: ["responsive", "first"],
    borderRadius: ["responsive", "first", "last"]
  },
  plugins: [require("@tailwindcss/ui")],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html"
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    }
  }
};

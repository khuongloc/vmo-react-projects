module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        red: "1px solid #f0a17d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

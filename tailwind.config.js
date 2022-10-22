/** @format */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      damion: ["Damion", "cursive"],
      cabin: ["Cabin", "sans-serif"],
      "comic-neue": ["Comic Neue", "sans-serif"],
    },
  },
  plugins: [],
});

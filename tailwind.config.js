module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Fredoka One", "cursive"],
        sans: ["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ["dark", "rounded"],
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["poppinsRegular", "sans-serif"],
        poppinsLight: ["poppinsLight", "sans-serif"],
        poppinsExtraLight: ["poppinsExtraLight", "sans-serif"],
        robotoMedium: ["robotoMedium", "sans-serif"],
        robotoRegular: ["robotoRegular", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #045661, #00656c, #007575, #00847a, #00947d, #0c9d81, #19a785, #24b089, #27b694, #2bbb9e, #31c1a9, #38c6b3)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

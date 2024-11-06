/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlack: "#334155",
        bgBlackPrimary: "#484554",
        bgBlackSecondary: "#383544",
        bgPrimary: "#f2f7ff",
      },
    },
  },
  plugins: [daisyui],
};

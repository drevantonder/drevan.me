import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        persian: "#4529FF",
      },
      fontFamily: {
        sans: ["futura-pt", defaultTheme.fontFamily.sans],
        serif: ["masqualero", defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

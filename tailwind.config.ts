import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zeyada: "var(--font-zeyada)",
        alison: "var(--font-allison)",
        josefin: "var(--font-josefin)",
        nothingyoucouldo: "var(--font-nothingyoucouldo)"
      },
      colors: {
      },
    },
  },
  plugins: [],
};
export default config;

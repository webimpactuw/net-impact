import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_white: '#FFFFFF',
        base_gray: '#EFF5F8',
        accent_blue: '#EBEFFF',
        primary_blue: '#5264FF',
        secondary_green: '#1AF343',
        primary_text: '#11122D',
        style_one: '#5264FF',
        style_two: '#2F8097',
      },
    },
  },
  plugins: [],
};
export default config;

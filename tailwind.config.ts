import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        lavender: 'rgb(215, 218, 229)',
        columbia: 'rgb(185, 205, 218)',
        tiffany: 'rgb(166, 216, 212)',
        cambridge: 'rgb(142, 175, 157)',
        amarath: 'rgb(152, 38, 73)'
      }
    },
  },
  plugins: [],
};
export default config;

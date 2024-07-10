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
        cadet: '#8DA7BE',
        columbia: '#CDE6F5',
        brunswick: '#2B503C',
        space: '#192A51',
        indigo: '#27187E',
        cham: '#A38560'
      }
    },
  },
  plugins: [],
};
export default config;

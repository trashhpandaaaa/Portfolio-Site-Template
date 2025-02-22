import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdf6e3",
        sage: "#8aa17e",
        forest: "#3c6255",
        sky: "#a7c5eb",
        sunset: "#ff9b71",
        night: "#2c3e50",
        paper: "#f9f3e3",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "dust-rise": "dust-rise 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "dust-rise": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(-100vh) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
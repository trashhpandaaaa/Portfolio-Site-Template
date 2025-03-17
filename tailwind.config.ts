import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
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
        "wiggle": "wiggle 1s ease-in-out infinite",
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
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.forest'),
              '&:hover': {
                color: theme('colors.forest'),
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.forest'),
            },
            h2: {
              color: theme('colors.forest'),
            },
            h3: {
              color: theme('colors.forest'),
            },
            code: {
              color: theme('colors.forest'),
              backgroundColor: theme('colors.forest.100'),
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
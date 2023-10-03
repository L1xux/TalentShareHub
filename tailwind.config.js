/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--roboto-script-font)",
        poorstory: "var(--poor-story-font)",
      },
      fontSize: {
        h: ["0.6rem", { lineHeight: "16px" }],
      },
      backgroundColor: {
        main: "#7ABEEF",
      },
      textColor: {
        main: "#7ABEEF",
      },
      screens: {
        xsm: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};

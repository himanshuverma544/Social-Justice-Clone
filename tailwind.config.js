/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        '2xs': '375px'
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem'
      },
      colors: {
        darkGreen: "#00321F",
        lightGreen: "#34443E",
        parrotGreen: "#899A5C",
        lightParrotGreen: "#8CA954",
        lightYellow: "#F6F3C3",
        lightBlue: "#DCFDF0",
        skyBlue: "#2A777C",
        lightSkyBlue: "#D2E2D5",
        lightOrange: "#F4A261"
      },
    },
  },
  plugins: [],
};
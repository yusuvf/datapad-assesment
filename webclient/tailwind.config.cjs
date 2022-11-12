/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text)-(blue|purple|red|orange|yellow|green)-(200|400|500)/,
      variants: ["dark"],
    },
  ],
  darkMode: "class",
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        "sans": ["SF Pro Rounded", defaultTheme.fontFamily.sans],
      },
      colors: {
        "background": "#F8F8F8",
        "transparent": "transparent",
        "primary": "#142782",
        "black-1": "rgba(0,0,0,0.015)",
        "black-10": "rgba(0,0,0,0.1)",
        "krasnyi-red": {
          100: "#FEE3D4",
          200: "#FDC0AB",
          300: "#FB9580",
          400: "#F86D60",
          500: "#F42D2D",
          600: "#D12030",
          700: "#AF1631",
          800: "#8D0E2F",
          900: "#75082E",
        },
        "radical-red": {
          100: "#FED9D5",
          200: "#FEACAD",
          300: "#FD838F",
          400: "#FB6382",
          500: "#F9316D",
          600: "#D6236A",
          700: "#B31865",
          800: "#900F5C",
          900: "#770955",
        },
        "giants-orange": {
          100: "#FFEAD2",
          200: "#FFCEA6",
          300: "#FFAD7A",
          400: "#FF8C59",
          500: "#FF5722",
          600: "#DB3918",
          700: "#B72111",
          800: "#930E0A",
          900: "#7A060B",
        },
        "eversong-yellow": {
          100: "#FFF3D5",
          200: "#FFE4AB",
          300: "#FFD181",
          400: "#FFBE62",
          500: "#FFA02E",
          600: "#DB7E21",
          700: "#B75F17",
          800: "#93450E",
          900: "#7A3108",
        },
        "dry-highlighter-green": {
          100: "#E3FAD6",
          200: "#C2F6AE",
          300: "#93E380",
          400: "#66C95B",
          500: "#2FA52D",
          600: "#208D28",
          700: "#167625",
          800: "#0E5F21",
          900: "#084F1F",
        },
        "vegan-green": {
          100: "#D2FBD0",
          200: "#A3F7A9",
          300: "#72E985",
          400: "#4DD470",
          500: "#1CB854",
          600: "#149E53",
          700: "#0E8450",
          800: "#086A49",
          900: "#055843",
        },
        "teal": {
          100: "#CAFAE4",
          200: "#97F5D2",
          300: "#5FE2BE",
          400: "#37C6AB",
          500: "#06A192",
          600: "#048A89",
          700: "#036A73",
          800: "#014D5D",
          900: "#01384D",
        },
        "raspberry-blue": {
          100: "#CCFDF3",
          200: "#9AFBEF",
          300: "#67F5EF",
          400: "#41E6EC",
          500: "#08C7E0",
          600: "#059CC0",
          700: "#0475A1",
          800: "#025481",
          900: "#013D6B",
        },
        "bolt-blue": {
          100: "#CEFDFE",
          200: "#9DF4FE",
          300: "#6CE5FE",
          400: "#47D2FE",
          500: "#0BB4FE",
          600: "#088CDA",
          700: "#0569B6",
          800: "#034A93",
          900: "#023579",
        },
        "denim-blue": {
          100: "#DFE8FF",
          200: "#BFD0FF",
          300: "#9FB7FF",
          400: "#87A3FF",
          500: "#5F81FF",
          600: "#4561DB",
          700: "#2F46B7",
          800: "#1E2F93",
          900: "#121F7A",
        },
        "royal-blue": {
          100: "#D9E6FD",
          200: "#B4CBFC",
          300: "#8DACF6",
          400: "#6E91EC",
          500: "#4169E1",
          600: "#2F50C1",
          700: "#203AA2",
          800: "#142782",
          900: "#0C1A6C",
        },
        "slate-blue": {
          100: "#E6E1FE",
          200: "#CEC4FD",
          300: "#B3A6F9",
          400: "#9C8EF4",
          500: "#7A69EE",
          600: "#5B4CCC",
          700: "#4034AB",
          800: "#2A218A",
          900: "#1B1472",
        },
        "magenta-purple": {
          100: "#FECCEC",
          200: "#FE99E3",
          300: "#FE66E3",
          400: "#FE40EC",
          500: "#FE01FC",
          600: "#FE01FC",
          700: "#9800B6",
          800: "#6E0093",
          900: "#500079",
        },
        "ritual-cyan": {
          100: "#F4F2F8",
          200: "#EAE7F2",
          300: "#CDCAD9",
          400: "#CDCAD9",
          500: "#757281",
          600: "#58536E",
          700: "#3F395C",
          800: "#29244A",
          900: "#1A153D",
        },
        "lead-black": {
          100: "#F3F2F3",
          200: "#E8E5E8",
          300: "#BCB8BB",
          400: "#797779",
          500: "#212021",
          600: "#1B171C",
          700: "#161017",
          800: "#100A13",
          900: "#0C060F",
        },
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
    },
  },
  plugins: [],
};
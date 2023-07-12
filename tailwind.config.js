/**  @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      extend: {}
    },
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      vDarkBlue: "hsl(255, 11%, 22%)",
      vDarkViolet: "hsl(260, 8%, 14%)",
      white: "#ffffff"
    },
    spacing: {
      sm: "0.8rem",
      md: "1.25rem",
      lg: "2.5rem",
      xl: "5rem"
    },
    plugins: []
  }
}

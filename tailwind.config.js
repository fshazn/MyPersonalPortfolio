/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "640px", // Small screens and above
    md: "768px", // Medium screens and above
    lg: "1024px", // Large screens and above
    xl: "1280px", // Extra large screens and above
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "fluid-1": "clamp(18px, 5vw, 32px)",
        "fluid-2": "clamp(12px, 5vw, 20px)",
      },
      animation: {
        text: "text 5s ease infinite"
      },
      keyframes: {
        '0%, 100%' : {
          'background-size': '200% 200%',
          'background-position': 'left-center'
        },
        '50%' : {
          'background-size': '200% 200%',
          'background-position': 'right-center'
        },
      },
    },
  },
  plugins: [],
};

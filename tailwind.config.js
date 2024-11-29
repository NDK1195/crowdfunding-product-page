/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 48%)",
      },
      backgroundImage: {
        "hero-desktop": "url('./src/images/image-hero-desktop.jpg')",
        "hero-mobile": "url('./src/images/image-hero-mobile.jpg')",
        "overlay-menu-mobile":
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "baseCard-color": "var(--baseCard-color)",
        "baseCard-borderColor": "var(--baseCard-borderColor)",
        "baseDark-blue": "var(--baseDark-blue)",
        "baseLight-blue": "var(--baseLight-blue)",
      },
      fontFamily: {
        "baseText-font": "var(--baseText-font)",
      },
    },
  },
  plugins: [],
};

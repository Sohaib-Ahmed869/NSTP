/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
      screens: {
        'md': '1024px', // Tablet breakpoint
        'lg': '1440px', // Laptop breakpoint
      },
    },
  },
  plugins: [

  ],
};
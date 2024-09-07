/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
      screens: {
        'md': '768px', // Tablet breakpoint
        'lg': '1024px', // Laptop breakpoint
      },
    },
  },
  plugins: [

  ],
};
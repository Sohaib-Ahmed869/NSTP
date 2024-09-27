/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
      colors: {
        "primary": "#90C74B",
        "secondary": "#000000",
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
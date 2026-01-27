/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text-blue': 'linear-gradient(to right, #3b82f6, #1e40af)',
        'gradient-blue-vibrant': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      },
      boxShadow: {
        'elevation-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

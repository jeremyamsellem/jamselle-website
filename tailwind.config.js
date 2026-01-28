/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-text-blue': 'linear-gradient(to right, #3b82f6, #1e40af)',
        'gradient-blue-vibrant': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        'gradient-warm': 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      },
      boxShadow: {
        'elevation': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'elevation-hover': '0 10px 25px rgba(0, 0, 0, 0.08)',
        'elevation-lg': '0 20px 40px rgba(0, 0, 0, 0.1)',
        'refined': '0 4px 12px rgba(0, 0, 0, 0.06)',
        'premium': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'deep': '0 20px 40px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        slate: {
          '850': '#0f1419',
          '950': '#0a0d13',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'slide-in-down': 'slideInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

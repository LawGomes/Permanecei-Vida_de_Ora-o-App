/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sacred-red': '#8B1A1A',
        'sacred-gold': '#D4AF37',
        'sacred-blue': '#1E3A5F',
        'sacred-beige': '#F5F1E8',
        'sacred-cream': '#FAF7F2',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          DEFAULT: '#2563EB',
          dark: '#1E3A8A',
        },
        accent: {
          light: '#FBBF24',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'about-pattern': "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
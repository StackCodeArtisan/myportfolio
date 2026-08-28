/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          emerald: '#10b981',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
        },
        dark: {
          bg: '#090D16',
          surface: '#111827',
          card: '#161F33',
          border: '#1F293D',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.25)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.25)',
      }
    },
  },
  plugins: [],
};

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
          DEFAULT: '#1271a1',
          hover: '#0e5a81',
          light: 'rgba(18, 113, 161, 0.1)',
        },
        background: {
          dark: '#0f172a',
          whisper: '#f8fafc',
        },
        slate: {
          dark: '#334155',
          muted: '#64748b',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./raqmilabs/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#0B0F14',
          graphite: '#151D24',
          slate: '#1E293B',
          offwhite: '#F8FAFC',
          darkbg: '#0B0F14',
          darkcard: '#131A22',
          darkborder: '#1F2937',
          blue: {
            DEFAULT: '#3B82F6',
            hover: '#2563EB',
            light: '#EFF6FF',
            dark: '#1D4ED8'
          },
          teal: {
            DEFAULT: '#14B8A6',
            hover: '#0D9488',
            light: '#F0FDFA',
            dark: '#0F766E'
          },
          amber: {
            DEFAULT: '#F59E0B',
            hover: '#D97706',
            light: '#FFFBEB',
            dark: '#B45309'
          }
        }
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        arabic: ['Cairo', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -10px rgba(11, 15, 20, 0.08), 0 4px 10px -2px rgba(11, 15, 20, 0.04)',
        'card-hover-dark': '0 14px 35px -10px rgba(0, 0, 0, 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.3)',
        'card-glow-blue': '0 10px 30px -10px rgba(59, 130, 246, 0.25)',
        'card-glow-teal': '0 10px 30px -10px rgba(20, 184, 166, 0.25)',
        'card-glow-amber': '0 10px 30px -10px rgba(245, 158, 11, 0.25)'
      }
    }
  },
  plugins: []
};

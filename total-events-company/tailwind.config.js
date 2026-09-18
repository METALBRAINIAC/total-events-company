/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colours pulled from the Total Event Co. logo.
        // Edit these three values if the logo's exact shades change.
        brand: {
          red: '#E10600',
          redDark: '#A30400',
          black: '#0A0A0A',
          charcoal: '#141414',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'cinematic-glow':
          'radial-gradient(circle at 20% 20%, rgba(225,6,0,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(225,6,0,0.10), transparent 45%)',
      },
    },
  },
  plugins: [],
}

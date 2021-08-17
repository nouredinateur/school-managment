module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        purple: '#41106e',
        coolgrey: '#FAFAFA'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

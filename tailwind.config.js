module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['PhantomSans', 'sans-serif'],
      },
      colors: {
        'primary-lighter': '#68d99b',
        'primary-light': '#3fcf80',
        'primary': '#00b676',
        'primary-dark': '#00875a',
        'primary-darker': '#005a3e',
        'accent': '#fbf4f3',
        'accent-dark': '#f0d1cc',
        'accent-darker': '#e4aea5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
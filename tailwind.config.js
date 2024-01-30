const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      green: '#4CAF50'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [forms, typography]
}

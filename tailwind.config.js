const { colors, width } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    inset: {
      '0': 0,
      '40': '10rem',
      '20': '5rem'
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "150": "rgb(245,247,250)"
        }
      },
      width: {
        ...width,
        container: '590px'
      }
    },
  },
  variants: {},
  plugins: [],
}

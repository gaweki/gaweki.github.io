const { colors, width, boxShadow } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    inset: {
      '0': 0,
      '8' : '2rem',
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
    boxShadow: {
      ...boxShadow,
      'bottom-default': '0 3px 3px 0 rgba(0, 0, 0, 0.06)'
    }
  },
  variants: {},
  plugins: [],
}

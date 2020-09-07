const { colors, width } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
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

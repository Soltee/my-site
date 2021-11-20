module.exports = {
  purge: [

     './components/**/*.{vue,js}',

     './layouts/**/*.vue',

     './pages/**/*.vue',

     './plugins/**/*.{js,ts}',

     './nuxt.config.{js,ts}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        1100 : '#ff5c4d',
        1200 : '#ff9636',
        1300 : '#ffcd58',
        1400 : '#dad870',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

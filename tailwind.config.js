module.exports = {
  mode: 'jit',
  content:  ['./public/**/*.html'] ,
  theme: {
    extend: {
      colors: {
        bgcolor:"var(--bgcolor)",
        mayellow:"var(--mayellow)"
      },
      backgroundImage:{
        'gutterman': "url(./gutterman.jpg)",
        'guarantee': "url(./guarantee.png)"
      }

    },
  },
  plugins: [],
}


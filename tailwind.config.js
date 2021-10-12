module.exports = {
  mode: 'jit',
  content:  ['./public/**/*.html'] ,
  theme: {
    extend: {
      colors: {
        bgcolor:"var(--bgcolor)",
        mayellow:"var(--mayellow)",
        textcol:"var(--textcolor)"
      },
      backgroundImage:{
        'gutterman': "url(./gutterman.jpg)",
        'roofman': "url(./roofman.jpeg)",
        'flatroof': "url(./flatroof.jpeg)",
        'guarantee': "url(./guarantee.png)"
      }

    },
  },
  plugins: [],
}


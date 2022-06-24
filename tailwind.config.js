module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        violet: '#30ffe1',
        'hotpink': {
          100: '#12ebcb',
          200: '#12ebcb',
        },
        aqua: '#15EBD9',
        navy: '#030406',
        space: '#0E131F',
        denim: '#000A21',
        white: '#ffffff'
      },
      screens : {
        xxs: '320px',
        xs: '576px'
      },
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif']
      },
    },
  },
  plugins: [],
}

module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    fontFamily: {
      DIN: ["DIN"],
      'roboto' :['"Roboto Mono"', 'monospace'],
    },
    extend: {
      fontSize: {
        'xxs': ['0.60rem', {lineHeight:'1rem'}],
      },
      borderWidth: {
        '1': '1px',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

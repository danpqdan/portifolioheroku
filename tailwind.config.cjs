/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize:{
      'hd-lg': 32,
      'hd-md': 28,
      'hd-sm': 24,
      'tx-lg': 20,
      'lx-md': 16
    },

    colors:{
      white: '#fff',
      black: '#000',

      'pink-900': '#FB2576',
      'pink-500': '#F35490',

      'blue-900': '#150050',
      'blue-500': '#492AA0',
    },
    extend: {
      fontFamily:{
        'soon': 'Comming Soon', sans,
        'consolas': 'Consolas', sans,
      }
    },
  },
  plugins: [],
}

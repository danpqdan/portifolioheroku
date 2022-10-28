/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      'hd-lg': 32,
      'hd-md': 28,
      'hd-sm': 24,
      'tx-lg': 20,
      'lx-md': 16
    },

    colors: {
      white: '#fff',
      black: '#000',

      'pink-900': '#FB2576',
      'pink-500': '#F35490',

      'blue-900': '#150050',
      'blue-500': '#492AA0',
    },

    height: {
      'xl-h': 720,
      'ds-session': '87vh',
      'ds-aside': '87vh',
      'ds-xl': 247,
      'ds-lg': 232,
      'ds-md': 179,
      'ds-sm': 250,
      'ds-pic':79
    },

    width: {
      'xl-w': 1280,
      'ds-session': 721,
      'ds-aside': 527,
      'ds-xl': 678,
      'ds-lg': 262,
      'ds-md': 328,
      'ds-sm': 241,
      'ds-pic': 122,
    },

    extend: {
      fontFamily: {
        'soon': 'Coming Soon',
        'consolas': 'Consolas',
      }
    },
  },
  plugins: [],
}

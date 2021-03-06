module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          1000: '#0B1005',
        }
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        '2P': ['"Press Start 2P"', 'cursive'],
        'noto-display': ['"Noto Serif Display"', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],      
    },
  },
  plugins: [],
}

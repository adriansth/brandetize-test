/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['playfair-display'],
        body: ['oxygen'],
      },
      colors: {
        normalBrown: '#4B4334',
        grayBrown: '#7E7666',
        salmon: '#CB6F56',
        lightSalmon: '#D88D78',
        darkBrown: '#2C2820',
        lightBrown: '#E0D3C2',
        cream: '#FDF3E3',
        greenBrown: '#AA9F89',
      }
    },
  },
  plugins: [],
}

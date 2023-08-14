/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#4EC690',
          gray: '#4EC690',
          blue: '#2196F3'
        },
        secondary: {
          green: '#008655',
          gray: '#B6C4C1'
        }
      }
    }
  },
  plugins: []
}

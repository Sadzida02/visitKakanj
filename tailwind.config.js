/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lila': '#854d95c3',
        'light-lila': '#d7bfde',
        'white': '#f7f4f2',
        'greyish': '#333',
        'brownish': '#5f3f0c',
        'limey': '#dfebcd',
      },
      backgroundImage: {
        'one': "url('/src/images/ksDžamija.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}


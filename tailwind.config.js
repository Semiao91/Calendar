/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        mygrey: '#e3e3e3',
        mypurple: '#864cff',
        myred: '#dd777b'
      },
      fontFamily: {
        'poppins-bold': ['Poppins Bold', 'sans-serif'],
        'poppins-regular': ['Poppins Regular', 'sans-serif'],
        'poppins-italic': ['Poppins Italic', 'sans-serif'],
        'poppins-bold-italic': ['Poppins Bold Italic', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


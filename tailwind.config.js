/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './getstarted.html',
    './dashboard.html',
    './aboutus.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
        'button-color':'#4681f4',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }


      
    },
  },
  plugins: [],
}


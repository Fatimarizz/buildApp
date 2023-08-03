/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sign-bg": "url('./bg.png')",
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 13rem ',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top ',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top ',
        'right-top-corner':'right top 1rem',
        top: 'top',
        'top-4': 'center top 1rem',
      },
      // fontFamily: {
      //   sans: ["var(--font-roboto)"],
      // },
      colors: {
        "light-purple": "#A26DF6",
        'grey':'#2A2D46',
        'dark-purple':'#6B65ED',
        'instgram-purple':'#8034B0',
        'twitter-blue':'#00ACEE',
        'facebook-blue':'#3B5998',
        'discord-blue':'#7289DA',
        'gray-black':'#100F14'
        
      },
    },
  },
  plugins: [],
}

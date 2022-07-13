/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        paleblue: 'hsl(225, 100%, 94%)',
        brightblue: 'hsl(245, 75%, 52%)',
        brightbluehover: 'hsl(245, 83%, 68%)',
        verypaleblue:'hsl(225, 100%, 98%)',
        desaturatedblue:'hsl(224, 23%, 55%)',
        darkblue: 'hsl(223, 47%, 23%)'
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

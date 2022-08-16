/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    screens: {
      xl: {max: '1279px'},
      xlmin: {min: '1279px'},
      
      lg: {max: '1023px'},
      lgmin: {min: '1023px'},

      md: {max: '767px'},
      mdmin: {min: '767px'},

      sm: {max: '576px'},
      smmin: {min: '576px'},
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      '2xl': '1536px',
    },
  },
    
  plugins: [],
}

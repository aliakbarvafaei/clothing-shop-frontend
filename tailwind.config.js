/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      padding: {
        'total': '5%',
      }
    },
    screens: {
      xl: {max: '1279px'},
      xlmin: {min: '1279px'},
      
      lg: {max: '1023px'},
      lgmin: {min: '1023px'},

      md: {max: '767px'},
      mdmin: {min: '767px'},

      sm: {max: '576px'},
      smmin: {min: '576px'},

      mm: {max: '420px'},
      mmmin: {min: '420px'},

      '2xl': '1536px',
    },
    colors: {
      'gray': '#f9f9f9',
      'darkGray': '#999999',
      'white': '#ffffff',
      'red': '#ff4c3b',
      'black': '#222222',
      'darkModeBlack': '#232323',
      'darkModeLightBlack': '#2b2b2b',
      'lightestBlak': '#3a3a3a',
      'darkModeGray': '#cfd4da',
      'lightestBlak': '#3a3a3a',
    },
  },
    
  plugins: [],
}

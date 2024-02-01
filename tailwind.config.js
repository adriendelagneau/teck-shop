/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, rgba(128,128,128,0.3), #e7e8e8)',
        'gradient-dark': 'linear-gradient(to right, #1b1a1a, #2b2929)',
      },
      fontFamily: {
        Lemon: ['Lemon']
      },
      textColor: {
        skin: {
          red: '#991b1b',
          gray: '#4b5563'
        },
        almondGreen : "#6c8476",
        light: {
            primary: '#211213', 
          },
          dark: {
            primary: '#eddedf', 
          },
      },
      backgroundColor: {
       
        light: {
          primary: '#e7e8e8', 
          secondary: '#efefef', 
          inverted: '#211213'
        },
        dark: {
          primary: '#121212', 
          secondary: '#27272a',
        },
      },
      borderColor: {
        light: "#d0d1d1",
        dark: "#27272a"
      },
     
    },
    variants: {}
  },
  plugins: [],
  darkMode: "class",
}

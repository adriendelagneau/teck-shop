/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        },
        dark: {
          primary: '#121212', 
          secondary: '#27272a',
        },
      },
      borderColor: {
        skin: {
          base: '#0e0b0b',
        }
      },
     
    },
    variants: {}
  },
  plugins: [],
  darkMode: "class",
}

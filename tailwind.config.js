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
          base: '#0e0b0b',
          inverted: '#f3f0f0',
          red: '#991b1b',
          gray: '#4b5563'
        }
      },
      backgroundColor: {
        skin: {
          fill: '#0e0b0b',
          inverted: '#f3f0f0'
        }
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

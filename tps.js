/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
  
        colors: {
          pepper: "var(--color-pepper)"
        },
        backgroundImage: {
          'gradient-light': 'linear-gradient(to right, rgba(128,128,128,0.3), #e7e8e8)',
          'gradient-dark': 'linear-gradient(to right, #1b1a1a, #2b2929)',
        },
        fontFamily: {
          Lemon: ['Lemon']
        },
        textColor: {
            light_primary: '#211213', 
            light_secondary: '#211213', 
            dark_primary: '#EDDEDF', 
            dark_secondary: '#EDDEDF', 
            light_red: '#991B1B',
            dark_red: "#991B1B",
        },
        backgroundColor: {
            light_primary: '#E7E8E8', 
            light_secondary: '#EFEFEF', 
            dark_primary: '#121212', 
            dark_secondary: '#27272A',
        },
        borderColor: {
          light_primary: "#D0D1D1",
            light_secondary: "#EFEFEF",
            dark_primary: "#27272A",
            dark_secondary: "#211213"
        },
      },
    },
    variants: {},
    plugins: [],
    darkMode: "class",
  }
  
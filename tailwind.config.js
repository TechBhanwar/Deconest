/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {

      screens: {
        'ipad-pro': { 'min': '1024px', 'max': '1366px' }, // iPad Pro ke liye breakpoint
      },
      height: {
        'ipad-pro': '600px', // Custom height iPad Pro ke liye
      },
    
      container: {
        center: true,  // Centers the container
        padding: '1rem',  // Adds padding to the container
        maxWidth: '1470px',  // Sets max-width to 1470px
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInFromTop: {
          '0%': { top: '-60px', opacity: '0' },
          '100%': { top: '20%', opacity: '1' },
          
        },
        slideOut: {
          '0%': { top: '20%', opacity: '1' },
          '100%': { top: '-60px', opacity: '0' },
          
        },
        slideInFromTopDesktop: {
          '0%': { top: '-60px', opacity: '0' },  
          '100%': { top: '25%', opacity: '1' },   
        },
        slideOutDesktop: {
          '0%': { top: '25%', opacity: '1' },     
          '100%': { top: '-60px', opacity: '0' }, 
        },
      },
      animation: {
        shake: "shake 0.8s ease-in-out",
        marquee: "marquee 5s linear infinite",
        slideInFromTop: 'slideInFromTop 0.5s ease-out',
        slideOut: 'slideOut 0.8s ease-out forwards',
        slideInFromTopDesktop: 'slideInFromTopDesktop 0.5s ease-out',
        slideOutDesktop: 'slideOutDesktop 0.5s ease-out'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1470px', 
         
        },
      });
    },
   
  ],

  
  
}

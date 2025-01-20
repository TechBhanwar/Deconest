/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will include all JavaScript, JSX, TypeScript, and TSX files in the src folder
  ],
  theme: {
    extend: {
      container: {
        center: true,  // Centers the container
        padding: '1rem',  // Adds padding to the container
        maxWidth: '1470px',  // Sets max-width to 1470px
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

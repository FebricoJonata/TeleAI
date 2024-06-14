/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'brand': {
        'primary': '#7B53FF', //Purple
        'secondary': '#6230FF', //Purple Pink
        'inv': '#181721', //Dark Blue
        'semi-inv': '#1817214D', //Semi Transparant Dark Blue
      },
      'neutral': {
        'med': '#FFFFFF4D', //Semi Transparant White
        'low': '#FFFFFF1A', //Semi Transparant White
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }, ['responsive', 'hover']);
    },
  ],
};

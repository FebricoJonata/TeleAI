/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    color: {
      'brand': {
        'primary': '#7B53FF', //Purple
        'secondary': '#DF79FF', //Purple Pink
        'tertiary': '#FF99FD', //Pink
        'inv': '#181721', //Dark Blue
      },
      'neutral': {
        'med': '#FFFFFF4D', //Semi Transparant White
        'low': '#FFFFFF1A', //Semi Transparant White
      }
    }
  },
  plugins: [],
};

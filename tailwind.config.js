/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:"Satoshi"
      },
      colors:{
        bg:{
          grey:"#F0EEED",
          yellow:"#FFC633",
          gray:"#9A9A9A",
        }
      }
    },
  },
  plugins: [],
}
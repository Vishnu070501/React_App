/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brownie-brown":'#986458',      //extra properties can be defined in this config file 
        "sexy-blue":{
          100:'#016c8b',
          200:'#0071b6'
        }
      }
    },
  },
  plugins: [],
}


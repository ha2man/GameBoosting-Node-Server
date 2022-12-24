/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
   "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
   extend: {
    fontFamily: {
     'urbanist': ['Urbanist', 'sans-serif']
    },
    textColor: {
     'main': '#5051F9',
     'main-gray': '#363740'
    },
    backgroundColor: {
     'main': '#5051F9',
     'landing-lady-bg': '#F9F9FF'
    }
   },
 },
 plugins: [],
}
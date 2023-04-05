/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6047EC",
        
"secondary": "#f774f2",
        
"accent": "#F3F3F3",
        
"neutral": "#22192E",
        
"base-100": "#EBEBEB",
        
"info": "#88C3E2",
        
"success": "#6047EC",
        
"warning": "#C2B9F7",
        
"error": "#F8546F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


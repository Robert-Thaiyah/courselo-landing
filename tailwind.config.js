/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors:{
        'course-yellow': "#fbf079",
        'course-green': "#62ddd5",
        'course-pink': "#e8b4e0",
        'course-red': "#ff90b6",
        'course-purple': "#8f90e2",
      }
    },
  },
  plugins: [],
}


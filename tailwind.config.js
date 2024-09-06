/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          '100%': { opacity: '0' },
          '0%': { opacity: '1' },
        }
      }
    }
  }
}
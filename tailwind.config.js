/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Instagramカラー
        instagram: {
          pink: '#E1306C',
          purple: '#833AB4',
          blue: '#405DE6',
          gradient: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCAF45)'
        },
        // アプリのメインカラー
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAD8FF',
          300: '#90BDFF',
          400: '#64A0FF',
          500: '#3A84FF',
          600: '#2A6CE0',
          700: '#1C55BF',
          800: '#124299',
          900: '#0A2C66',
        },
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCAF45)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 
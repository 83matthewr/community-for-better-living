/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#F2FFFE',
          300: '#E0F5F3',
          500: '#95D6CF',
          700: '#3DA49A',
          900: '#00403C',
        },
        'secondary': {
          100: '#FFF8F2',
          300: '#FBE5D3',
          500: '#E8AB76',
          700: '#D38845',
          900: '#8E4300',
        },
        'neutral': {
          100: '#E4ECEC',
          300: '#B3C6C6',
          500: '#879898',
          700: '#576464',
          900: '#2C302F',
        },
        'success': '#4FC16F',
        'error': '#E94646'
      },
      fontFamily: {
        'body': ['var(--font-source-sans-pro)']
      }
    },
  },
  plugins: [],
}

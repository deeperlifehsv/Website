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
        primary: {
          50: '#f1f4f8',
          100: '#dee5f1',
          200: '#c3d0e4',
          300: '#9bb2d0',
          400: '#7a96ba',
          500: '#5c7ea4',
          600: '#355783',
          700: '#345682',
          800: '#305380',
          900: '#243d5c',
        },
        navy: {
          50: '#f1f4f8',
          100: '#dee5f1',
          200: '#c3d0e4',
          300: '#9bb2d0',
          400: '#7a96ba',
          500: '#5c7ea4',
          600: '#355783',
          700: '#345682',
          800: '#305380',
          900: '#243d5c',
        },
        accent: {
          50: '#f9eded',
          100: '#f3dbdb',
          200: '#e5baba',
          300: '#d69393',
          400: '#c26f6e',
          500: '#a84647',
          600: '#933d3d',
          700: '#7a3333',
          800: '#632929',
          900: '#4e2020',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#faf2e5',
          300: '#f5e8d3',
          400: '#eed9b8',
          500: '#e4c79c',
          600: '#d6b583',
          700: '#c89f6d',
          800: '#a6825a',
          900: '#866b4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(53, 87, 131, 0.9) 0%, rgba(48, 83, 128, 0.9) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

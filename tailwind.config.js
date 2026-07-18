/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        terminal: {
          bg: '#0a0e14',
          surface: '#111922',
          border: '#1e2d3d',
          green: '#00e676',
          cyan: '#00bcd4',
          amber: '#ffab00',
          red: '#ff5252',
          text: '#c5d1de',
          muted: '#5c6f82',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        typing: 'typing 3.5s steps(40) 1s forwards',
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideIn: 'slideIn 0.5s ease-out forwards',
        glitch: 'glitch 2s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
};

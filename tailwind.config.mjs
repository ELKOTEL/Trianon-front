/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        rotateInfinite: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(600deg)',
          },
        },
        zoomInAb: {
          '0%, 100%': { transform: 'scale(1)' },          // Slightly zoomed in
          '50%': { transform: 'scale(1.1)' },          // Zooms out to normal size
        },
      },
      animation: {
        rotateInfinite: 'rotateInfinite 10s linear infinite',
        'spin-slow': 'spin 30s  linear infinite',
        zoomInAb: 'zoomInAb 8s ease-in-out  infinite',       // Match duration with maskReveal
      },

    },
  },
  plugins: [],
};

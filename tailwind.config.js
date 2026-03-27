/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00152a', // The vast, open ice
          container: '#0f2a44', // Floating content blocks
        },
        secondary: {
          DEFAULT: '#325e9e',
          container: '#8eb7fd',
        },
        surface: {
          DEFAULT: '#f7f9ff', // Base Level: The vast, open ice
          container: '#e4effd', // Mid Level: Floating content blocks
          highest: '#d9e3f1', // Peak Level: Interactive elements and cards
          low: '#edf4ff', // Transition sections
          lowest: '#ffffff', // Floating nav, modals (70% opacity white)
          dim: '#d1dbe8',
        },
        accent: '#2bdeee', // Inspired by Amarna clinica maybe, but let's stick to Arctic Flow tokens
        error: '#ba1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '3rem',
        '2xl': '4rem',
      },
      transitionTimingFunction: {
        'power3': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      spacing: {
        'hero-margin': '8.5rem', // 24 token in Stitch?
        'section-padding': '5.5rem', // 16 token in Stitch
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #325e9e 0%, #0f2a44 100%)',
      },
    },
  },
  plugins: [],
}

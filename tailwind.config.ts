import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2c2c2c',
        cream: '#f5f3f0',
        rose: {
          DEFAULT: '#d4a5a0',
          dark: '#a87a73',
          darker: '#8a6357',
        },
        lavender: '#d9d0e8',
        mint: '#c8dfd4',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
};

export default config;

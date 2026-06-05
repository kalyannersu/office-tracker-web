import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        paper: '#FAFAFA',
        accent: { DEFAULT: '#007AFF', dark: '#0A84FF' },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

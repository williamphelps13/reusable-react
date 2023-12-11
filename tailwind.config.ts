import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/preview.tsx',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'most-contrast': 'hsl(var(--most-contrast) / <alpha-value>)',
      'least-contrast': 'hsl(var(--least-contrast) / <alpha-value>)',
      primary: {
        50: 'hsl(var(--primary-50) / <alpha-value>)',
        100: 'hsl(var(--primary-100) / <alpha-value>)',
        200: 'hsl(var(--primary-200) / <alpha-value>)',
        300: 'hsl(var(--primary-300) / <alpha-value>)',
        400: 'hsl(var(--primary-400) / <alpha-value>)',
        500: 'hsl(var(--primary-500) / <alpha-value>)',
        600: 'hsl(var(--primary-600) / <alpha-value>)',
        700: 'hsl(var(--primary-700) / <alpha-value>)',
        800: 'hsl(var(--primary-800) / <alpha-value>)',
        900: 'hsl(var(--primary-900) / <alpha-value>)',
      },
      secondary: {
        50: 'hsl(var(--secondary-50) / <alpha-value>)',
        100: 'hsl(var(--secondary-100) / <alpha-value>)',
        200: 'hsl(var(--secondary-200) / <alpha-value>)',
        300: 'hsl(var(--secondary-300) / <alpha-value>)',
        400: 'hsl(var(--secondary-400) / <alpha-value>)',
        500: 'hsl(var(--secondary-500) / <alpha-value>)',
        600: 'hsl(var(--secondary-600) / <alpha-value>)',
        700: 'hsl(var(--secondary-700) / <alpha-value>)',
        800: 'hsl(var(--secondary-800) / <alpha-value>)',
        900: 'hsl(var(--secondary-900) / <alpha-value>)',
      },
      neutral: {
        50: 'hsl(var(--neutral-50) / <alpha-value>)',
        100: 'hsl(var(--neutral-100) / <alpha-value>)',
        200: 'hsl(var(--neutral-200) / <alpha-value>)',
        300: 'hsl(var(--neutral-300) / <alpha-value>)',
        400: 'hsl(var(--neutral-400) / <alpha-value>)',
        500: 'hsl(var(--neutral-500) / <alpha-value>)',
        600: 'hsl(var(--neutral-600) / <alpha-value>)',
        700: 'hsl(var(--neutral-700) / <alpha-value>)',
        800: 'hsl(var(--neutral-800) / <alpha-value>)',
        900: 'hsl(var(--neutral-900) / <alpha-value>)',
      },
      danger: {
        50: 'hsl(var(--danger-50) / <alpha-value>)',
        100: 'hsl(var(--danger-100) / <alpha-value>)',
        200: 'hsl(var(--danger-200) / <alpha-value>)',
        300: 'hsl(var(--danger-300) / <alpha-value>)',
        400: 'hsl(var(--danger-400) / <alpha-value>)',
        500: 'hsl(var(--danger-500) / <alpha-value>)',
        600: 'hsl(var(--danger-600) / <alpha-value>)',
        700: 'hsl(var(--danger-700) / <alpha-value>)',
        800: 'hsl(var(--danger-800) / <alpha-value>)',
        900: 'hsl(var(--danger-900) / <alpha-value>)',
      },
      success: {
        50: 'hsl(var(--success-50) / <alpha-value>)',
        100: 'hsl(var(--success-100) / <alpha-value>)',
        200: 'hsl(var(--success-200) / <alpha-value>)',
        300: 'hsl(var(--success-300) / <alpha-value>)',
        400: 'hsl(var(--success-400) / <alpha-value>)',
        500: 'hsl(var(--success-500) / <alpha-value>)',
        600: 'hsl(var(--success-600) / <alpha-value>)',
        700: 'hsl(var(--success-700) / <alpha-value>)',
        800: 'hsl(var(--success-800) / <alpha-value>)',
        900: 'hsl(var(--success-900) / <alpha-value>)',
      },
    },
    extend: {
      fontSize: {
        xxs: '.625rem',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
    },
  },
  plugins: [],
}

export default config

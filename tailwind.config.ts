import type { Config } from 'tailwindcss'

import { tailwindSafelist } from './tailwind-safelist'

const config: Config = {
  content: ['./.storybook/preview.tsx', './src/**/*.{ts,tsx,mdx}'],
  safelist: tailwindSafelist,
  theme: {
    colors: {
      transparent: 'transparent',
      'most-contrast': 'rgb(var(--most-contrast) / <alpha-value>)',
      'least-contrast': 'rgb(var(--least-contrast) / <alpha-value>)',
      primary: {
        50: 'rgb(var(--primary-50) / <alpha-value>)',
        100: 'rgb(var(--primary-100) / <alpha-value>)',
        200: 'rgb(var(--primary-200) / <alpha-value>)',
        300: 'rgb(var(--primary-300) / <alpha-value>)',
        400: 'rgb(var(--primary-400) / <alpha-value>)',
        500: 'rgb(var(--primary-500) / <alpha-value>)',
        600: 'rgb(var(--primary-600) / <alpha-value>)',
        700: 'rgb(var(--primary-700) / <alpha-value>)',
        800: 'rgb(var(--primary-800) / <alpha-value>)',
        900: 'rgb(var(--primary-900) / <alpha-value>)',
      },
      secondary: {
        50: 'rgb(var(--secondary-50) / <alpha-value>)',
        100: 'rgb(var(--secondary-100) / <alpha-value>)',
        200: 'rgb(var(--secondary-200) / <alpha-value>)',
        300: 'rgb(var(--secondary-300) / <alpha-value>)',
        400: 'rgb(var(--secondary-400) / <alpha-value>)',
        500: 'rgb(var(--secondary-500) / <alpha-value>)',
        600: 'rgb(var(--secondary-600) / <alpha-value>)',
        700: 'rgb(var(--secondary-700) / <alpha-value>)',
        800: 'rgb(var(--secondary-800) / <alpha-value>)',
        900: 'rgb(var(--secondary-900) / <alpha-value>)',
      },
      tertiary: {
        50: 'rgb(var(--tertiary-50) / <alpha-value>)',
        100: 'rgb(var(--tertiary-100) / <alpha-value>)',
        200: 'rgb(var(--tertiary-200) / <alpha-value>)',
        300: 'rgb(var(--tertiary-300) / <alpha-value>)',
        400: 'rgb(var(--tertiary-400) / <alpha-value>)',
        500: 'rgb(var(--tertiary-500) / <alpha-value>)',
        600: 'rgb(var(--tertiary-600) / <alpha-value>)',
        700: 'rgb(var(--tertiary-700) / <alpha-value>)',
        800: 'rgb(var(--tertiary-800) / <alpha-value>)',
        900: 'rgb(var(--tertiary-900) / <alpha-value>)',
      },
      neutral: {
        50: 'rgb(var(--neutral-50) / <alpha-value>)',
        100: 'rgb(var(--neutral-100) / <alpha-value>)',
        200: 'rgb(var(--neutral-200) / <alpha-value>)',
        300: 'rgb(var(--neutral-300) / <alpha-value>)',
        400: 'rgb(var(--neutral-400) / <alpha-value>)',
        500: 'rgb(var(--neutral-500) / <alpha-value>)',
        600: 'rgb(var(--neutral-600) / <alpha-value>)',
        700: 'rgb(var(--neutral-700) / <alpha-value>)',
        800: 'rgb(var(--neutral-800) / <alpha-value>)',
        900: 'rgb(var(--neutral-900) / <alpha-value>)',
      },
      danger: {
        50: 'rgb(var(--danger-50) / <alpha-value>)',
        100: 'rgb(var(--danger-100) / <alpha-value>)',
        200: 'rgb(var(--danger-200) / <alpha-value>)',
        300: 'rgb(var(--danger-300) / <alpha-value>)',
        400: 'rgb(var(--danger-400) / <alpha-value>)',
        500: 'rgb(var(--danger-500) / <alpha-value>)',
        600: 'rgb(var(--danger-600) / <alpha-value>)',
        700: 'rgb(var(--danger-700) / <alpha-value>)',
        800: 'rgb(var(--danger-800) / <alpha-value>)',
        900: 'rgb(var(--danger-900) / <alpha-value>)',
      },
      success: {
        50: 'rgb(var(--success-50) / <alpha-value>)',
        100: 'rgb(var(--success-100) / <alpha-value>)',
        200: 'rgb(var(--success-200) / <alpha-value>)',
        300: 'rgb(var(--success-300) / <alpha-value>)',
        400: 'rgb(var(--success-400) / <alpha-value>)',
        500: 'rgb(var(--success-500) / <alpha-value>)',
        600: 'rgb(var(--success-600) / <alpha-value>)',
        700: 'rgb(var(--success-700) / <alpha-value>)',
        800: 'rgb(var(--success-800) / <alpha-value>)',
        900: 'rgb(var(--success-900) / <alpha-value>)',
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

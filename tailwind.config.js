module.exports = {
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: 'Jost, sans-serif',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4rem',
    },
    flex: {
      none: 'none',
      inherit: 'inherit',
      initial: '0 1 auto',
      auto: '1 1 auto',
      '1': '1 0 auto',
      '2': '2 0 auto',
      full: '100 0 auto',
    },
    extend: {
      },
      boxShadow: {
        button: `0 0.25rem #4fd1c5`,
        'button-secondary': `0 0.25rem #1a202c`,
      },
    },
  },
  variants: {
    flex: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
    minWidth: ['responsive', 'hover', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  purge: ['./src/**/*.js'],
}

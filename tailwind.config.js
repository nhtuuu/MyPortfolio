/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        secondary: 'Fira Code'
      },
      colors: {
        dark: '#011627',
        textColor: '#607B96',
        borderColor: '#1E2D3D'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        },
        '.boxText': {
          borderRadius: '2px',
          padding: '0 2px 2px',
          position: 'relative',
          transitionDuration: '.2s',
          transitionProperty: 'box-shadow, color'
        },
        '.boxTextBlue': {
          color: '#55acee',
          boxShadow: '0 1px 0 4px rgba(85,172,238,.1), inset 0 -2em 0 rgba(85,172,238,.1)'
        }
      })
    })
  ]
}

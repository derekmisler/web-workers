import preset from '@rebass/preset'

const colors = {
  black: '#1b262c',
  gray: '#2e3440',
  lightGray: '#eceff4',
  white: '#d8dee9',
  blue: '#0f4c81',
  red: '#ed6663',
  orange: '#ffa372',
  purple: '#6c567b',
  green: '#5b8c85'
}

export const theme = {
  ...preset,
  colors: {
    ...preset.colors,
    ...colors
  },
  fonts: {
    heading: 'DM Serif Display, serif',
    body: 'Roboto Condensed, sans-serif'
  },
  fontSizes: [ 20, 24, 32, 48, 64 ],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  buttons: {
    primary: {
      color: colors.black,
      backgroundColor: colors.red,
      width: '100%',
      p: 3
    },
    secondary: {
      color: colors.black,
      backgroundColor: colors.orange,
      width: '100%',
      p: 3
    }
  }
}

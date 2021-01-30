import { createMuiTheme } from '@material-ui/core/styles'

const fonts = "'Lato', 'Poppins', sans-serif"

export const theme = createMuiTheme({
  typography: {
    fontFamily: fonts
  },
  layout: {
    xs: '30',
    lg: '60',
    xl: '90'
  },
  fullHeight: {
    height: '100vh'
  },
  awesomeTitle: {
    fontWeight: '900',
    background: '-webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  awesomeButton: {
    fontWeight: '900',
    background: '-webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    color: '#ffffffde',
    animation: 'gradient 15s ease infinite'
  },
  divider: {
    height: '4px',
    margin: '20px 20vw'
  },
  overrides: {
    MuiTypography: {
      h2: {
        fontSize: '4rem',
        '@media (max-width:600px)': {
          fontSize: '2.5rem'
        }
      }
    }
  }
})

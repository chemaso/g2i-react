import { createMuiTheme } from '@material-ui/core/styles'

const fonts = "'Lato', 'Poppins', sans-serif"

// global styling config for Material UI

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
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin'
        },
        '*::-webkit-scrollbar': {
          width: '10px',
          height: '10px'
        },
        '*::-webkit-scrollbar-button': {
          width: '0px',
          height: '0px'
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#e1e1e1',
          border: '0px none #ffffff',
          borderRadius: '50px'
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: '#ffffff'
        },
        '*::-webkit-scrollbar-thumb:active': {
          background: '#000000'
        },
        '*::-webkit-scrollbar-track': {
          background: '#666666',
          border: '0px none #ffffff',
          borderRadius: '50px'
        },
        '*::-webkit-scrollbar-track:hover': {
          background: '#666666'
        },
        '*::-webkit-scrollbar-track:active': {
          background: '#333333'
        },
        '*::-webkit-scrollbar-corner': {
          background: 'transparent'
        }
      }
    },
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

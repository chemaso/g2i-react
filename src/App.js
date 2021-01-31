import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configStore from './reducers/store'
import { theme } from './resources/theme'
import RoutesGenerator from './router'
import './App.css'

function App () {
  const { store, persistor } = configStore()

  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RoutesGenerator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

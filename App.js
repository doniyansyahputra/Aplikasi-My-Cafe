import React from 'react'
import Routes from './config/routes'
import { GlobalStateProvider } from './config/globalContext'

const App = () => {
  return (
    <GlobalStateProvider>
    <Routes /> 
    </GlobalStateProvider>
  )
}

export default App
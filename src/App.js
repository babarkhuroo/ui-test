import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import { GlobalStyles } from './styles/Global'
import { theme } from './styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme.ts';
import { GlobalStyles } from './styles/globalStyles.ts';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router.tsx';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>    
  )
}

import { ThemeProvider } from '@chakra-ui/react';
import { AuthProvider, CSSReset } from '../lib/auth';
import customTheme from '../styles/theme';



const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}


export default App;

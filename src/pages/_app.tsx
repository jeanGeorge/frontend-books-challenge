import BookProvider from 'contexts/BookContext';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import HtmlHeader from '../components/HtmlHeader/HtmlHeader';
import AuthProvider from '../contexts/AuthContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <AuthProvider>
          <BookProvider>
            <GlobalStyle />
            <HtmlHeader />
            <Component {...pageProps} />
          </BookProvider>
        </AuthProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
};

export default App;

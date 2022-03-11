import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import GlobalStyle from 'styles/global';
import HtmlHeader from '../components/HtmlHeader/HtmlHeader';
import AuthProvider from '../contexts/AuthContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <GlobalStyle />
        <HtmlHeader />
        <Component {...pageProps} />
      </AuthProvider>
    </CookiesProvider>
  );
};

export default App;

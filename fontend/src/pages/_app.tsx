import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';
import Layout from '@/layouts';

export default function App({ Component, pageProps }: AppProps) {

  return (
    // <Component {...pageProps} />
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

import {AppProps} from 'next/app';
import {ReactElement} from 'react';
import {CssBaseline} from '@material-ui/core';
import Layout from '_components/layout';
import 'fontsource-roboto';
import Head from 'next/head';
import {AppContextProvider} from '_hooks/useAppContext';

export default function App({Component, pageProps}: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          key="viewport"
        />
        <title>Cafe Dashboard Admin Panel</title>
      </Head>
      <CssBaseline />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
}

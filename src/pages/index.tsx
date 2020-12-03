import Head from 'next/head';
import {ReactElement} from 'react';
import {Typography} from '@material-ui/core';
import {useAppContext} from '_hooks/useAppContext';
import {HomeTexts} from '_locales';
import {useTranslate} from '_hooks';

const Home = (): ReactElement => {
  const context = useAppContext();
  const translate = useTranslate(HomeTexts);
  const {user} = context;
  return user ? (
    <>
      <Head>
        <title>{user.displayName} - Cafe Dashboard</title>
      </Head>
      <section>
        <Typography variant="h4" component="h1" gutterBottom>
          {translate.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {translate.subtitle} {user.displayName}
        </Typography>
      </section>
    </>
  ) : (
    <>
      <Head>
        <title>Cafe Dashboard</title>
      </Head>
      <section>

        <Typography variant="h4" component="h1">
          Some introduction to app
        </Typography>
      </section>
    </>
  );
};

export default Home;

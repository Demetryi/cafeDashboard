import Head from 'next/head';
import {ReactElement} from 'react';
import {useAppContext} from '_hooks/useAppContext';
import {HomeTexts} from '_locales/index';
import {useTranslate} from '_hooks/index';

const Home = (): ReactElement => {
  const context = useAppContext();
  const translate = useTranslate(HomeTexts);
  const {user} = context;
  return user ? (
    <>
      <Head>
        <title>{user.displayName}-Cafe Dashboard</title>
      </Head>
      <p data-testid="text">{translate.title}</p>
      <p data-testid="text">{translate.subtitle} {user.displayName}</p>
    </>
  ) : (
    <>
      <Head>
        <title>Cafe Dashboard</title>
      </Head>
    </>
  );
};

export default Home;

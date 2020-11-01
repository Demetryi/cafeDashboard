import Head from 'next/head';
import {ReactElement} from 'react';
import {useAppContext} from '_hooks/useAppContext';

const Home = (): ReactElement => {
  const context = useAppContext();
  const {user} = context;
  return user ? (
    <>
      <Head>
        <title>{user.displayName}-Cafe Dashboard</title>
      </Head>
      <p data-testid="text">Some text</p>
      <p data-testid="text">Hello {user.displayName}</p>
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

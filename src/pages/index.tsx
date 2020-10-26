import Head from 'next/head';
import {ReactElement} from 'react';
import {useAppContext} from '_hooks/useAppContext';

export default function Home(): ReactElement {
  const context = useAppContext();
  const {user} = context;
  return (
    <div>
      <Head>
        <title>Cafe Dashboard</title>
      </Head>
      <p data-testid="text">Some text</p>
      <p data-testid="text">Hello {user.displayName}</p>
    </div>
  );
}

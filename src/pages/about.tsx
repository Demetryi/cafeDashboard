import Head from 'next/head';
import {ReactElement} from 'react';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>About Cafe Dashboard</title>
      </Head>
      <p data-testid="text">Here will be information about this Admin Panel</p>
    </div>
  );
}

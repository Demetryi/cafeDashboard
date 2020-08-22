import Head from 'next/head';
import {ReactElement} from 'react';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Cafe Dashboard</title>
      </Head>
      <p data-testid="text">Some text</p>
    </div>
  );
}

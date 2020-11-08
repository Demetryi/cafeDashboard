import Head from 'next/head';
import {ReactElement} from 'react';

export default function About(): ReactElement {
  return (
    <>
      <Head>
        <title>About Cafe Dashboard</title>
      </Head>
      <div>
        <p data-testid="text">
          Here will be information about this Admin Panel
        </p>
      </div>
    </>
  );
}

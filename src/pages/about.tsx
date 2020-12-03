import Head from 'next/head';
import {ReactElement} from 'react';
import {Typography} from '@material-ui/core';

export default function About(): ReactElement {
  return (
    <>
      <Head>
        <title>About Cafe Dashboard</title>
      </Head>
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          Here will be information about this Admin Panel
        </Typography>
      </div>
    </>
  );
}

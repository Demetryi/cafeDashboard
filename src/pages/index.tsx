import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {ReactElement} from 'react';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cafe Dashboard</title>
      </Head>
      <p data-testid="text">Some text</p>
    </div>
  );
}

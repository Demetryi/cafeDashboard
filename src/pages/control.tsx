import Head from 'next/head';
import {ReactElement} from 'react';
import firebase from 'firebase';
import {useCollection} from 'react-firebase-hooks/firestore';
import {Alert} from '@material-ui/lab';
import {useAppContext} from '_hooks/useAppContext';
import {useTranslate} from '_hooks/useTranslate';
import {ControlTexts} from '_locales';
import {Loader, Nets} from '_components';

export default function Control(): ReactElement {
  const DB = firebase.firestore();
  const context = useAppContext();
  const {user} = context;
  const [value, loading, error] = useCollection(
    DB.collection('nets').where('managers', 'array-contains', user.uid),
  );
  const translate = useTranslate(ControlTexts);
  return (
    <>
      <Head>
        <title>Control your establishment</title>
      </Head>
      <div>
        {error && (
          <>
            <Alert severity="error" data-error={error}>
              {translate.error}
            </Alert>
          </>
        )}
        {loading && <Loader />}
        {value && <Nets nets={value.docs} />}
      </div>
    </>
  );
}

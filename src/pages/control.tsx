import Head from 'next/head';
import {ReactElement} from 'react';
import firebase from 'firebase';
import {useCollection} from 'react-firebase-hooks/firestore';
import {useDownloadURL} from 'react-firebase-hooks/storage';
import {Alert} from '@material-ui/lab';
import {Avatar} from '@material-ui/core';
import {useAppContext} from '_hooks/useAppContext';
import {useTranslate} from '_hooks/useTranslate';
import {ControlTexts} from '_locales/index';
import {Loader} from '_components/index';

export default function Control(): ReactElement {
  const DB = firebase.firestore();
  const ST = firebase.storage();
  const context = useAppContext();
  const {user} = context;
  const [value, loading, error] = useCollection(
    DB.collection('nets').where('managers', 'array-contains', user.uid),
  );
  const [image] = useDownloadURL(ST.ref('bricks/logo.png'));
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
        {value && (
          <div>
            {value.docs.map((doc) => (
              <div key={doc.id}>
                Collection: {doc.id}
                <Avatar variant="rounded" src={image} />
                <p>
                  {doc.id}:{JSON.stringify(doc.data())}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

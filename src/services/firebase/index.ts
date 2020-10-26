import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: `${process.env.projectId}.firebaseapp.com`,
  databaseURL: `https://${process.env.projectId}.firebaseio.com`,
  projectId: process.env.projectId,
  storageBucket: `${process.env.projectId}.appspot.com`,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

export default function initFirebase(): void {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    // try {
    //   firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();
    // } catch (err) {
    //   if (!/already exists/.test(err.message)) {
    //     console.error('Firebase initialization error', err.stack);
    //   }
    // }
  }
}

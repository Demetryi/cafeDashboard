import firebase from 'firebase';
import {IUser} from '_hooks/useAppContext/types';

const mapUserData = (user: firebase.User): IUser => {
  if (!user) {
    throw new Error('The was an issue authorizing');
  }
  const {uid, email, displayName, photoURL} = user;
  return {
    uid,
    email,
    displayName,
    photoURL,
  };
};

export default mapUserData;

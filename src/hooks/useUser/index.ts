import {useEffect} from 'react';
import {useRouter} from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '_services/firebase';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from './userCookies';
import mapUserData from './mapUserData';
import {useAppContext} from '_hooks/index';
import {IUser} from '_hooks/useAppContext/types';

initFirebase();

const useUser = (): IUseUser => {
  const context = useAppContext();
  const {user, setUser} = context;
  const router = useRouter();

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged((updatedUser) => {
        if (updatedUser) {
          const userData = mapUserData(updatedUser);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser(null);
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      router.push('/auth');
      return;
    }
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return {user};
};
const logout = async (): Promise<void> => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      removeUserCookie();
    })
    .catch((e) => {
      console.error(e);
    });
};

export {useUser, logout};

interface IUseUser {
  user: IUser;
}

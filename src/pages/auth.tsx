import {ReactElement, useEffect, useState} from 'react';
import {Typography, Container, Box, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import {useAppContext} from '_hooks/useAppContext';
import firebase from 'firebase';
import mapUserData from '_hooks/useUser/mapUserData';
import {setUserCookie} from '_hooks/useUser/userCookies';
import {Alert} from '@material-ui/lab';
import initFirebase from '_services/firebase';

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();

export default function Auth(): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const [auth, setAuth] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  const context = useAppContext();
  const {user, setUser} = context;
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);
  const handleGAuth = () => {
    setAuth(true);
    setError(false);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const userData = mapUserData(result.user);
        setUser(userData);
        setUserCookie(userData);
      })
      .catch((err: unknown | Error) => {
        setError((err as Error)?.message || true);
      })
      .finally(() => setAuth(false));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Authentication
        </Typography>
        <Typography component="h2" variant="h6">
          If you dont have an account, it will be created automatically!
        </Typography>
        <Box component="span" paddingY={5}>
          <IconButton
            title={'Google auth'}
            disabled={auth}
            onClick={handleGAuth}>
            <svg
              role={'none'}
              viewBox="0 0 533.5 544.3"
              width={32}
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
          </IconButton>
        </Box>
        {error && (
          <Box paddingTop={1}>
            <Alert severity="error">Something wrong, try again!</Alert>
          </Box>
        )}
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

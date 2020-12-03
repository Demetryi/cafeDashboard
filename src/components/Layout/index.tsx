import {ReactNode, ReactElement} from 'react';
import {Bar} from './Bar';
import {AppDrawer} from './Drawer';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Paper, Card, CardContent} from '@material-ui/core';
import {useUser} from '_hooks/useUser';
import {useRouter} from 'next/router';
import {useAppContext} from '_hooks/useAppContext';
import {isProtectedRoute} from '_utils';

interface ILayout {
  children: ReactNode;
}

export default function Layout({children}: ILayout): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  useUser();
  const context = useAppContext();
  const {user} = context;
  const isNeedRedirect = !user && router && isProtectedRoute(router.route);
  if (isNeedRedirect && typeof window !== 'undefined') {
    router.push('/auth');
  }
  if (isNeedRedirect) return null;
  return (
    <div className={classes.root}>
      <Bar />
      <AppDrawer />
      <Paper component="main" elevation={0} className={classes.page} square>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Card className={classes.content} elevation={2}>
            <CardContent>{children}</CardContent>
          </Card>
        </Container>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  page: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
}));

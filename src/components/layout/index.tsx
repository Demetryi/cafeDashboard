import {Bar} from './Bar';
import {AppDrawer} from './Drawer';
import {AppContextProvider} from '_components/hooks';
import {ReactNode, ReactElement} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Paper, Card, CardContent} from '@material-ui/core';

interface ILayout {
  children: ReactNode;
}

export default function Layout({children}: ILayout): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppContextProvider>
        <Bar />
        <AppDrawer />
        <Paper component="main" elevation={0} className={classes.page}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Card className={classes.content}>
              <CardContent>{children}</CardContent>
            </Card>
          </Container>
        </Paper>
      </AppContextProvider>
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

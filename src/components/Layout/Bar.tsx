import clsx from 'clsx';
import {ReactElement} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core/styles';
import {useAppContext} from '_hooks';
import Link from 'next/link';
import {LocalizeMenu} from './LocalizeMenu';

export function Bar(): ReactElement {
  const classes = useStyles();
  const context = useAppContext();
  const {visible, showDrawer, toggleTheme, user, clearUser} = context;
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, visible && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Show drawer"
          onClick={showDrawer}
          className={clsx(
            classes.menuButton,
            visible && classes.menuButtonHidden,
          )}>
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}>
          Dashboard
        </Typography>
        <LocalizeMenu />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Toggle theme"
          onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
        {user ? (
          <>
            <IconButton aria-label="Profile">
              <Avatar src={user.photoURL} className={classes.avatar}>
                {user.displayName[0]}
              </Avatar>
            </IconButton>
            <IconButton color="inherit" onClick={clearUser} aria-label="Logout">
              <ExitToAppIcon />
            </IconButton>
          </>
        ) : (
          <Link href="/auth">
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

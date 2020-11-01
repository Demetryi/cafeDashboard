import clsx from 'clsx';
import {
  useEffect,
  useState,
  useRef,
  ReactElement,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TranslateIcon from '@material-ui/icons/Translate';
import {makeStyles} from '@material-ui/core/styles';
import {useAppContext} from '_hooks/index';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Languages} from '_locales/index';

export function Bar(): ReactElement {
  const classes = useStyles();
  const context = useAppContext();
  const {visible, showDrawer, toggleTheme, user, clearUser} = context;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpenState) => !prevOpenState);
  };

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const {locale, locales, push, route} = useRouter();
  const langClick = (event: MouseEvent<EventTarget>, lang: string) => {
    push(route, route, {locale: lang});
    handleClose(event);
  };
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
        <Box mr={1}>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggle}>
            <TranslateIcon />
            {Languages[locale]}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal>
            {({TransitionProps, placement}) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}>
                      {locales.map((lang) => (
                        <MenuItem
                          onClick={(event) => langClick(event, lang)}
                          key={lang}>
                          {Languages[lang]}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Toggle theme"
          onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
        {user ? (
          <>
            <IconButton>
              <Avatar src={user.photoURL} className={classes.avatar}>
                {user.displayName[0]}
              </Avatar>
            </IconButton>
            <IconButton color="inherit" onClick={clearUser}>
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

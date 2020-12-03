import {
  useEffect,
  useState,
  useRef,
  ReactElement,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import {
  Button,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  Box,
} from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import {useRouter} from 'next/router';
import {Languages} from '_locales';

export function LocalizeMenu(): ReactElement {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = (): void => {
    setOpen((prevOpenState) => !prevOpenState);
  };
  const handleClose = (event: MouseEvent<EventTarget>): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  const handleListKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const {locale, locales, push, route} = useRouter();
  const langClick = (event: MouseEvent<EventTarget>, lang: string): void => {
    push(route, route, {locale: lang}).finally(() => handleClose(event));
  };
  return (
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
  );
}

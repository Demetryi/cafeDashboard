import {ReactElement} from 'react';
import {Button, ListItemText, ListItemIcon, ListItem} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import Link from 'next/link';
import {useTranslate} from '_hooks/useTranslate';
import {LayoutTexts} from '_locales/index';

export const MainListItems = (): ReactElement => {
  const {links} = useTranslate(LayoutTexts);
  return (
    <>
      <ListItem>
        <Link href="/" passHref>
          <Button fullWidth>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={links.dashboard} />
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/about" passHref>
          <Button fullWidth>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={links.about} />
          </Button>
        </Link>
      </ListItem>
    </>
  );
};

export const SecondaryListItems = (): ReactElement => {
  const {links} = useTranslate(LayoutTexts);
  return (
    <>
      <ListItem>
        <Link href="/control" passHref>
          <Button fullWidth>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary={links.control} />
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/" passHref>
          <Button fullWidth>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary={links.analytics} />
          </Button>
        </Link>
      </ListItem>
      {/*<ListItem>
      <Link href="/" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Button>
      </Link>
    </ListItem>*/}
    </>
  );
};

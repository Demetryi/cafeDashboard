import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from 'next/link';
import {Button} from '@material-ui/core';
import {ReactElement} from 'react';

export const MainListItems = (): ReactElement => (
  <>
    <ListItem>
      <Link href="/" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Button>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/about" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </Button>
      </Link>
    </ListItem>
  </>
);

export const SecondaryListItems = (): ReactElement => (
  <>
    <ListItem>
      <Link href="/" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary="Managers" />
        </Button>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Managers" />
        </Button>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Button>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/" passHref>
        <Button fullWidth>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Button>
      </Link>
    </ListItem>
  </>
);

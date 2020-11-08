import {ReactElement} from 'react';
import {Box, CircularProgress} from '@material-ui/core';

export const Loader = (): ReactElement => (
  <Box
    display="flex"
    justifyContent="center"
    m={1}
    p={1}
    bgcolor="background.paper">
    <CircularProgress disableShrink />
  </Box>
);

export default Loader;

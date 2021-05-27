import React from 'react';
import Grid from '@material-ui/core/Grid';

import Logo from '../Logo';

import * as styles from './styles.module.css';
import TopbarLinks from '../TopbarLinks';

const Topbar = () => (
  <header className={styles.wrapper}>
    <Grid
      container
      spacing={3}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={4}>
        <Logo />
      </Grid>
      <Grid item xs={6}>
        <TopbarLinks />
      </Grid>
    </Grid>
  </header>
);

export default Topbar;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

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
      <Grid item xs={2} sm={4}>
        <Logo />
      </Grid>
      <Grid item xs={10} sm={8}>
        <TopbarLinks />
      </Grid>
    </Grid>
  </header>
);

export default Topbar;

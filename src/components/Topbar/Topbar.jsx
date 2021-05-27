import React from 'react';
import Grid from '@material-ui/core/Grid';

import * as styles from './styles.module.css';

const Topbar = () => (
  <div className={styles.wrapper}>
    <Grid
      container
      spacing={3}
      justify="space-between"
    >
      <Grid item xs={4}>
        Logo
      </Grid>
      <Grid item xs={6}>
        Links
      </Grid>
    </Grid>
  </div>
);

export default Topbar;
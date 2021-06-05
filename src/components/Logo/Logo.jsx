import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import Hidden from '@material-ui/core/Hidden';

import * as styles from './styles.module.css';

export default () => (
  <div className={styles.wrapper}>
    <StaticImage src="../../images/logo-icon.png" alt="Logo" />
    {/* <Hidden smDown> */}
    <div className={styles.textContainer}>
      <b>AJAY</b>
      {' '}
      BALACHANDRAN
    </div>
    {/* </Hidden> */}
  </div>
);

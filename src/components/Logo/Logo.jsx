import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './styles.module.css';

export default () => (
  <div className={styles.wrapper}>
    <StaticImage src="../../images/logo-icon.png" className={styles.logo} alt="Logo" />
    <div className={styles.textContainer}>
      <b>AJAY</b>
      {' '}
      BALACHANDRAN
    </div>
  </div>
);

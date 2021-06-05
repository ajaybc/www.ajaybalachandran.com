import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './styles.module.css';

export default () => (
  <div className={styles.wrapper}>
    <StaticImage src="../../images/ajay-balachandran-with-pattern.png" alt="Ajay Balachandran" quality={100} />
  </div>
);

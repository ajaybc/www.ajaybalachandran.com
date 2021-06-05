import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './styles.module.css';

export default () => (
  <div className={styles.socialIconsWrapper}>
    <a href="https://www.linkedin.com/in/ajaybc" className={styles.socialLink}>
      <StaticImage src="../../images/linkedin.png" alt="LinkedIn Icon" />
    </a>
    <a href="https://github.com/ajaybc" className={styles.socialLink}>
      <StaticImage src="../../images/github.png" alt="Github Icon" />
    </a>
  </div>
);

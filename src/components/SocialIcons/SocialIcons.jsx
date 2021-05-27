import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './styles.module.css';

export default () => (
  <div className={styles.socialIconsWrapper}>
    <Link to="https://www.linkedin.com/in/ajaybc" className={styles.socialLink}>
      <StaticImage src="../../images/linkedin.png" />
    </Link>
    <Link to="https://github.com/ajaybc" className={styles.socialLink}>
      <StaticImage src="../../images/github.png" />
    </Link>
  </div>
);

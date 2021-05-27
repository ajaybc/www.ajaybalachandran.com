import React from 'react';
import { Link } from 'gatsby';

import * as styles from './styles.module.css';

export default () => (
  <nav className={styles.wrapper} aria-label="Main Navigation">
    <Link to="/career" className={styles.link}>MY CAREER</Link>
    <Link to="/contact" className={styles.link}>CONTACT ME</Link>
  </nav>
);

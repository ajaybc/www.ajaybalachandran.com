import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';

import HeroImage from '../HeroImage';
import * as styles from './styles.module.css';

export default () => (
  <div className={styles.heroSectionWrapper}>
    <Grid
      container
      spacing={3}
      justify="space-between"
      alignItems="center"
      className={styles.innerContainer}
    >
      <Grid item xs={6} md={8}>
        <section className={styles.heroTextContainer}>
          <div>
            <h1>നമസ്കാരം</h1>
            <p>
              I am a fullstack web developer with experience developing
              highly distributed and reliable systems. Currently focusing on 
              developing rich UI for a multitude
              of web applications since falling in love with Javascript.
            </p>
            <Link to="/career" className={styles.careerLink}>
              MY CAREER
              <div className={styles.arrowRight} />
            </Link>
          </div>
        </section>
      </Grid>
      <Grid item xs={6} md={4}>
        <HeroImage />
      </Grid>
    </Grid>
  </div>
);

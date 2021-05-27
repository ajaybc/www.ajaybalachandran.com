import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Grid from '@material-ui/core/Grid';

import * as styles from './styles.module.css';

export default () => (
  <div className={styles.heroSectionWrapper}>
    <Grid
      container
      spacing={3}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={7}>
        <section className={styles.heroTextContainer}>
          <div>
            <h1>നമസ്കാരം</h1>
            <p>
              I am a fullstack web developer with experience developing
              highly distributed and reliable systems.
              <br />
              Currently focusing on developing rich UI for a multitude
              of web applications since falling in love with Javascript.
            </p>
            <Link to="/career" className={styles.careerLink}>
              MY CAREER
              <div className={styles.arrowRight} />
            </Link>
          </div>
        </section>
      </Grid>
      <Grid item xs={6} />
    </Grid>
  </div>
);
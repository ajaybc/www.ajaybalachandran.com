import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';

import HeroImage from '../HeroImage';
import SocialIcons from '../SocialIcons';
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
      <Box clone order={{ xs: 2, sm: 1 }}>
        <Grid item xs={12} sm={6} md={8}>
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
                {/* <div className={styles.arrowRight} /> */}
                <span className={clsx('material-icons', 'md-36', styles.arrowRight)}>play_arrow</span>
              </Link>
            </div>
          </section>
          <Hidden xsDown>
            <SocialIcons />
          </Hidden>
        </Grid>
      </Box>
      <Box clone order={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <HeroImage />
        </Grid>
      </Box>
    </Grid>
  </div>
);

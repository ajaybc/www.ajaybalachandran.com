import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import * as styles from './styles.module.css';
import Topbar from '../../components/Topbar';

const MainLayout = ({ children }) => (
  <>
    <CssBaseline />
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@700&family=Nunito:wght@600;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <div className={styles.wrapper}>
      <Topbar />
      {children}
    </div>
  </>
);

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;

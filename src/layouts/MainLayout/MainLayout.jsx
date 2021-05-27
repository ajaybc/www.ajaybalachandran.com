import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { node } from 'prop-types';

import * as styles from './styles.module.css';
import Topbar from '../../components/Topbar';

const MainLayout = ({ children }) => (
  <>
    <CssBaseline />
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

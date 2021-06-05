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
      <script type="application/ld+json">
        {`
          {
            "@context": "http://www.schema.org",
            "@type": "person",
            "name": "Ajay Balachandran",
            "jobTitle": "Technical Lead",
            "url": "https://www.ajaybalachandran.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kuala Lumpur",
                "addressCountry": "Malaysia"
            },
            "birthDate": "1989-08-11"
          }
        `}
      </script>
      <meta name="theme-color" content="#F8FAFF" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@700&family=Nunito:wght@600;800&family=Roboto:wght@400;700&family=Material+Icons&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    </Helmet>
    <div className={styles.wrapper}>
      <Topbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  </>
);

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;

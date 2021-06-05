import * as React from 'react';

import { MainLayout } from '../../layouts';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const HomePage = () => (
  <MainLayout>
    <SEO />
    <HeroSection />
  </MainLayout>
);

export default HomePage;

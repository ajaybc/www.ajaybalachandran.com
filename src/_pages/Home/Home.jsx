import * as React from 'react';

import { MainLayout } from '../../layouts';
import HeroSection from '../../components/HeroSection';
import SocialIcons from '../../components/SocialIcons';

const HomePage = () => (
  <MainLayout>
    <HeroSection />
    <SocialIcons />
  </MainLayout>
);

export default HomePage;

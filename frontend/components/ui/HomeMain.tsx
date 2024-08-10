import React from 'react';
import Hero from './Hero';
import { iSiteData } from '@/interfaces';
import Stats from './Stats';
import Features from './Features';
import Banner from './Banner';
import Faq from './Faq';
import site_data_default from '@/constants/index';
import RootStyles from '../RootStyles';

const HomeMain = ({ data }: { data: iSiteData }) => {
  return (
    <main className="main" id="main">
      <RootStyles data={data.main_color || site_data_default.main_color} />
      <Hero data={data.hero || site_data_default.hero} />
      <Stats data={data.stats || site_data_default.stats} />
      <Features data={data.features || site_data_default.features} />
      <Banner data={data.banner || site_data_default.banner} />
      <Faq data={data.faq || site_data_default.faq} />
    </main>
  );
};

export default HomeMain;

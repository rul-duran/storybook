import React from 'react';
import LandingPage from '../components/pages/LandingPage/landingPage';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
};

const Template = (args) => <LandingPage {...args} />;

export const DefaultLandingPage = Template.bind({});
DefaultLandingPage.args = {};

import React from 'react';
import Navigation from '../components/organisms/navigation/navigation';

export default {
  title: 'Organisms/Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const DefaultNavigation = Template.bind({});
DefaultNavigation.args = {
  links: [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ],
};

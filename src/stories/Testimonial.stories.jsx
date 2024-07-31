import React from 'react';
import Testimonial from '../components/molecules/testimonial/testimonial';

export default {
  title: 'Molecules/Testimonial',
  component: Testimonial,
};

const Template = (args) => <Testimonial {...args} />;

export const DefaultTestimonial = Template.bind({});
DefaultTestimonial.args = {
  quote: 'This is an amazing product!',
  author: 'John Doe',
};
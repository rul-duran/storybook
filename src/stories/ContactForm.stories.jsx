import React from 'react';
import ContactForm from '../components/organisms/contactForm/contactForm';

export default {
  title: 'Molecules/ContactForm',
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args} />;

export const DefaultContactForm = Template.bind({});
DefaultContactForm.args = {
  onSubmit: (data) => alert(`Form submitted: ${JSON.stringify(data)}`),
};

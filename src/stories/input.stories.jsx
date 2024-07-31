import React from 'react';
import Input from '../components/atoms/input/input';

/**
 * Primary UI component for user interaction
 */

export default {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'Enter text',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  placeholder: 'Enter email',
};
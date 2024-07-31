import React from 'react';
import Text from '../components/atoms/text/text';

export default {
  title: 'Atoms/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {
  children: 'This is a sample text.',
};
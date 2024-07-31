import Card from '../components/molecules/card/card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Card Title',
  content: 'This is the card content',
  buttonLabel: 'Click Me',
};

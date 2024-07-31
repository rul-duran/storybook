import React from 'react';
import LandingPageTemplate from '../components/templates/landingPageTemplate/landingPageTemplate';
import Navigation from '../components/organisms/navigation/navigation';
import Card from '../components/molecules/card/card';
import Testimonial from '../components/molecules/testimonial/testimonial';
import ContactForm from '../components/organisms/contactForm/contactForm';

export default {
  title: 'Templates/LandingPageTemplate',
  component: LandingPageTemplate,
};

const Template = (args) => <LandingPageTemplate {...args} />;

export const DefaultLandingPageTemplate = Template.bind({});
DefaultLandingPageTemplate.args = {
  navigation: (
    <Navigation
      links={[
        { href: "/", label: "Text 1" },
        { href: "/features", label: "Text 2" },
        { href: "/testimonials", label: "Text 3" },
        { href: "/contact", label: "Text  4" },
      ]}
    />
  ),
  header: <h1>Welcome Message</h1>,
  main: (
    <div>
      <section id="features">
        <Card
          title="Card 1"
          content="Description of feature 1."
          buttonLabel="Learn More"
          onButtonClick={() => alert('Feature 1')}
        />
        <Card
          title="Card 2"
          content="Description of feature 2."
          buttonLabel="Learn More"
          onButtonClick={() => alert('Feature 2')}
        />
      </section>
      <section id="testimonials">
        <Testimonial
          quote="Testimonial text"
          author="Author name"
        />
        <Testimonial
          quote="Testimonial text"
          author="Author name"
        />
      </section>
      <section id="contact">
        <h2>General Form</h2>
        <ContactForm onSubmit={(data) => alert(`Form submitted: ${JSON.stringify(data)}`)} />
      </section>
    </div>
  ),
  footer: <p>&copy; 2024 My Company</p>,
};

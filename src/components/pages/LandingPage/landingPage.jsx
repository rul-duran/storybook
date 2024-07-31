import LandingPageTemplate from '../../templates/landingPageTemplate/landingPageTemplate';
import Card from '../../molecules/card/card'
import Testimonial from '../../molecules/testimonial/testimonial';
import ContactForm from '../../organisms/contactForm/contactForm';
import Navigation from '../../organisms/navigation/navigation';

const LandingPage = () => (
  <LandingPageTemplate
    navigation={<Navigation links={[
      { href: "#", label: "Home" },
      { href: "#features", label: "Features" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#contact", label: "Contact" },
    ]} />}
    header={<h1>Welcome to Our Landing Page</h1>}
    main={  
      <div>
        <section id="features">
          <Card
            title="Feature 1"
            content="Description of feature 1."
            buttonLabel="Learn More"
            onButtonClick={() => alert('Feature 1')}
          />
          <Card
            title="Feature 2"
            content="Description of feature 2."
            buttonLabel="Learn More"
            onButtonClick={() => alert('Feature 2')}
          />
        </section>
        <section id="testimonials">
          <Testimonial
            quote="This is the best product ever!"
            author="John Doe"
          />
          <Testimonial
            quote="Amazing experience, highly recommend."
            author="Jane Smith"
          />
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <ContactForm onSubmit={(data) => alert(`Form submitted: ${JSON.stringify(data)}`)} />
        </section>
      </div>
    }
    footer={<p>&copy; 2024 My Company</p>}
  />
);

export default LandingPage;

import PropTypes from 'prop-types';
import './landingPageTemplate.css';

const LandingPageTemplate = ({ navigation, header, main, footer }) => (
  <div className="landing-page">
    {navigation}
    <header>{header}</header>
    <main>{main}</main>
    <footer>{footer}</footer>
  </div>
);

LandingPageTemplate.propTypes = {
  navigation: PropTypes.node,
  header: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default LandingPageTemplate;

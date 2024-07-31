import PropTypes from 'prop-types';
import './testimonial.css';

const Testimonial = ({ quote, author }) => (
  <div className="testimonial">
    <blockquote>{quote}</blockquote>
    <p className="author">{author}</p>
  </div>
);

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Testimonial;

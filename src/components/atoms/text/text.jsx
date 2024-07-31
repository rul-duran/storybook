import PropTypes from 'prop-types';
import './text.css';

const Text = ({ children }) => (
  <p className="text">{children}</p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;

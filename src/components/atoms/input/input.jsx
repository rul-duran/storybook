import PropTypes from 'prop-types';
import './input.css';

const Input = ({ type, placeholder, value, onChange }) => (
  <input 
    className="input"
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

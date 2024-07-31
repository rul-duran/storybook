import PropTypes from 'prop-types';

import Button from '../../atoms/buttom/button';

import './card.css';

const Card = ({ title, content, buttonLabel, onButtonClick }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
    <Button label={buttonLabel} onClick={onButtonClick} />
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default Card;

import style from './FeedbackButton.module.css';
import PropTypes from 'prop-types';

const FeedbackButton = ({ options, onLeaveFeedback }) => {
  return <button className={style.btn} onClick={options}>{onLeaveFeedback} </button>

      };

FeedbackButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButton;

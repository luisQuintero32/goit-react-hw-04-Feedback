import style from './Notifications.module.css';
import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
  return <p className={style.title}>{message}</p>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;

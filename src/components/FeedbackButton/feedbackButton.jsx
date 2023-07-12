import style from './FeedbackButton.module.css';

const FeedbackButton = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={style.btnCont}>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className={style.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackButton;
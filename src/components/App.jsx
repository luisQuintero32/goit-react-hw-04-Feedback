import { useState } from 'react';
import style from './App.module.css';
import Section from './Section/Section';
import FeedbackButton from './FeedbackButton/feedbackButton';
import Statistics from './Statistics/Statistics';
import Notifications from './Notifications/Notifications';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const incrementGood = () => {
    setGood(prev => prev +1);
  };

 const incrementNeutral = () => {
    setNeutral(prev => prev +1);
  };

 const incrementBad = () => {
    setBad(prev => prev +1);
  };

 const countTotalFeedback = () => {
    let totalReviews = good + neutral + bad;
    return totalReviews;
  };

 const countPositiveFeedbackPercentage = () => {
    let percentagePositiveReviews =
      (good / countTotalFeedback()) * 100;
    return Math.round(percentagePositiveReviews);
  };





    return (
      <div className={style.container}>
        <Section title="Please leave feedback">
          <div className={style.buttonsCont}>  

          <FeedbackButton options={incrementGood} onLeaveFeedback={'Good'}/>
          <FeedbackButton options={incrementNeutral} onLeaveFeedback={'Neutral'}/>
          <FeedbackButton options={incrementBad} onLeaveFeedback={'Bad'}/>
          </div>
        </Section>
        <Section title="statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }

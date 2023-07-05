import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addCountFeedback = e => {
    const name = e.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    return parseInt((100 * good) / countTotalFeedback());
  };

  return (
    <div>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addCountFeedback}
          />
        }
      />
      {countTotalFeedback() > 0 ? (
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        />
      ) : (
        <NotificationMessage />
      )}
    </div>
  );
}

export default App;

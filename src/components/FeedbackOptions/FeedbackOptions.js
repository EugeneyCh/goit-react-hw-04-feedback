import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttonGroup}>
      {options.map(name => (
        <button
          key={name}
          className={css.buttonFeedback}
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

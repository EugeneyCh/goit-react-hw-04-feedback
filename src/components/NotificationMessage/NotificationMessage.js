import React from 'react';
import css from './NotificationMessage.module.css';

function NotificationMessage() {
  return (
    <div className={css.notification}>
      <h3>There is no feedback</h3>
    </div>
  );
}

export default NotificationMessage;

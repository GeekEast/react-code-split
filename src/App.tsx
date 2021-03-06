import React, { Fragment } from 'react';
import { Router, Link } from '@reach/router';
import Time from './Time';
import Calendar from './Calendar';

const App = () => {
  return (
    <Fragment>
      <div>
        <Link to="time">Time</Link>
      </div>
      <div>
        <Link to="calendar">Calendar</Link>
      </div>
      <Router>
        <Time path="time" />
        <Calendar path="calendar" />
      </Router>
    </Fragment>
  );
};

export default App;

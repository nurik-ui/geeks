// rsc

import React from 'react';
import classes from './component2.module.css';

const Component2 = ( {age} ) => {
  return (
    <div className={classes.component}>
      <h1>{age}</h1>
    </div>
  );
};

export default Component2;
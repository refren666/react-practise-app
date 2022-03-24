import React from 'react';

import classes from './MyInput.module.css'

// React.forwardRef is used with useRef hook in case we have custom component like this COOL!!!!
const MyInput = React.forwardRef((props, ref) => {
  return (
    // {...props} for attributes from parent element type='text', placeholder='data' !!!
    <input ref={ref} {...props} className={classes.myInput}>
      
    </input>
  );
});

export default MyInput;
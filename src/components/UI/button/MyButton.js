import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {

  return (
    // {...props} is needed for button attributes, like 'disabled' !!!
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
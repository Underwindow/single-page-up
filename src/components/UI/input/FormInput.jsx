import React, { forwardRef } from 'react';
import classes from './FormInput.module.css';

const FormInput = forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.MyInput} {...props} />
    );
});

export default FormInput;

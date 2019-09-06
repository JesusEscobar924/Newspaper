import React from 'react';
import classes from './Spinner.module.css'
const Spinner = () => (
    <div className={classes.spinner}>
        <div className={classes.doublebounce1}></div>
        <div className={classes.doublebounce2}></div>
    </div>
)
export default Spinner 
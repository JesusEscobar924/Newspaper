import React from 'react';
import Weather from './Weather/Weather'
import dateformat from 'date-fns/format';

import classes from './Showcase.module.css';


const showcase = (props) => {
    let date = dateformat(new Date(), 'dddd, DD MMMM  YYYY');
    
    return (
        <div className={classes.box}>
            
            <h1 className={classes.glitch}>Cyborg News</h1>        
            <p className={classes.Date}>{date}</p>
    
            <Weather/> 
        </div>
    )
}

export default showcase;
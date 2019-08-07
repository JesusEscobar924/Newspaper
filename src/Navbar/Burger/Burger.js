import React from 'react';
import classes from './Burger.module.css';

const Burger = (props) => {
    let attachedClasses = [classes.Burger, classes.Close]

    if(props.open){
        attachedClasses = [classes.Burger, classes.Open]
    }
    return(
        <div className={attachedClasses.join(' ')} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
   

export default Burger;
import React from 'react';
import classes from './Burger.module.css';

const Burger = (props) => {
    let attachedClasses = [classes.Burger]

    if(props.open){
        attachedClasses = [classes.Burger, classes.Open, classes.Opened]
    }
    return(
        <div className={attachedClasses.join(' ')} onClick={props.BurgerClicked}>
            <div className={props.open ? classes.OpenDiv : null}></div>
            <div></div>
            <div className={props.open ? classes.OpenDiv1 : null}></div>
        </div>
    )
}
   

export default Burger;
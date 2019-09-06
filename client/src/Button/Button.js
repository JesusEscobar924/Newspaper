import React from 'react';
import classes from './Button.module.css';

const button = props => {
    let atachedclasses = [classes.Button];
    if(props.active===props.boton.toLowerCase()+'.json'){
        atachedclasses = [classes.Button, classes.Active];
    }
    return(
    <button 
        onClick={props.btnclicked}
        className={atachedclasses.join(" ")}
         name={props.boton.toLowerCase()+'.json'}
    >

         {props.boton}
    </button>

    )
}

export default button;
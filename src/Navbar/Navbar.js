import React from 'react';
import classes from './Navbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems'
import Burger from './Burger/Burger'

const navBar = (props) => {
    return(
        <header  className={classes.Header}>
            <div className={classes.ListaL} onClick={props.Logo}>
                <li className={classes.Brand}> News</li>
                <li className={classes.H1}>Paper</li> 
            </div>
            
            <ul className={classes.Lista}>
                <NavigationItems actived={props.btnActived} clicked={props.ButtonClicked}/>    
            </ul>
            <Burger open={props.open} closed={props.closed} clicked={props.BurgerClicked}/>
            
        </header>
        
    )
}

export default navBar;
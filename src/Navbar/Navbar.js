import React from 'react';
import classes from './Navbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems'
import Burger from './Burger/Burger'

const navBar = (props) => {
    return(
        <header className={classes.Header}>
            <div className={classes.Lista}>
            <li className={classes.Brand}><i className="far fa-newspaper"></i> News</li>
            <li className={classes.H1}>Paper</li> 
            </div>

            <ul className={classes.Lista}>
                <NavigationItems/>    
            </ul>
            <Burger open={props.open} closed={props.closed} clicked={props.BurgerClicked}/>
            
        </header>
        
    )
}

export default navBar;
import React from 'react'; 
import classes from './SideBar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';


const sideBar = (props) => {
    let attachedClasses = [classes.SideBar, classes.Close]

    if(props.open){
        attachedClasses = [classes.SideBar, classes.Open]
    }
     
    return (
        <div>
            <div className={attachedClasses.join(' ')}>
                <nav className={classes.Nav} >
                    <NavigationItems  clicked={props.ButtonClicked} actived={props.btnActived} />
                </nav>
            </div>
        </div>
        
    );
};

export default sideBar;
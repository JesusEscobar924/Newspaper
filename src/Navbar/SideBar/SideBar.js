import React from 'react'; 
import classes from './SideBar.module.css';
import Aux from '../../HOC/Auxiliar/aux';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideBar = (props) => {
    let attachedClasses = [classes.SideBar, classes.Close]

    if(props.open){
        attachedClasses = [classes.SideBar, classes.Open]
    }
     
    return (
        <Aux>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    );
};

export default sideBar;
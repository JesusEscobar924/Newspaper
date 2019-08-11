import React from 'react'; 
import classes from './SideBar.module.css';
import Hoc from '../../higherordercomponents/hoc';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideBar = (props) => {
    let attachedClasses = [classes.SideBar, classes.Close]

    if(props.open){
        attachedClasses = [classes.SideBar, classes.Open]
    }
     
    return (
        <Hoc>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems  clicked={props.ButtonClicked} actived={props.btnActived} />
                </nav>
            </div>
        </Hoc>
        
    );
};

export default sideBar;
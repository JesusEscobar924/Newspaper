import React from 'react';
import Hoc from '../../higherordercomponents/hoc';
import Button from '../../Button/Button';


const navigationItems = (props) => {
    const btn = [
        "World",
        "Politics",
        "Science",
        "Technology",
        "Food",
        "Sports"
]
    let btnConverted = btn.map(key => {
        return (
        <li  key={key}>
            <Button btnclicked={props.clicked}
                active={props.actived}
                boton={key}/>
        </li>
        )
    });
    return(
        <Hoc>
            {btnConverted}  
        </Hoc>
        
    )
}

export default navigationItems;
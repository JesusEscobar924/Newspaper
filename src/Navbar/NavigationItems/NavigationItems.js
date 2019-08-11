import React from 'react';
import Aux from '../../hoc/Auxiliar/aux';
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
        <Aux>
            {btnConverted}  
        </Aux>
        
    )
}

export default navigationItems;
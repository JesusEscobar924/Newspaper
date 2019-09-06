import React from 'react';

import Button from '../../Button/Button';


const navigationItems = (props) => {
    const btn = [
        "home",
        "arts",
        "fashion",
        "food",
        "magazine",
        "movies",
        "politics",
        "science",
        "sports", 
        "technology",
        "world",
        
]
    let btnConverted = btn.map(key => {
        return (
        <li  key={key}>
            <Button 
                btnclicked={props.clicked}
                active={props.actived}
                boton={key.toUpperCase()}/>
        </li>
        )
    })
    return(
        <div>
            {btnConverted} 
        </div>
        
    )
}

export default navigationItems; 
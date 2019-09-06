import React from 'react';

import Button from '../../Button/Button';

let more = 8;
const navigationItems = (props) => {
    const btn = [
        "home",
        "arts",
        "food",
        "politics",
        "science",
        "sports", 
        "technology",
        "world",
        
]
    let btnConverted = btn.map(key => {
        return (
        <li  key={key}>
            <Button btnclicked={props.clicked}
                active={props.actived}
                boton={key.toUpperCase()}/>
        </li>
        )
    }).slice(0,more);
    return(
        <div>
            {btnConverted} 
        </div>
        
    )
}

export default navigationItems; 
import React from 'react';
import classes from './Footer.module.css'

const footer = () => (
    <footer className={classes.Footer}> 
        <a style={{textDecoration:"none", color:"#fff"}} href={'https://developer.nytimes.com'}>
            <img  src={'https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1539041473000'} alt={"Data provided by The New York Times"}></img> 
        </a>
        <p>&copy; 2019 Jesús Escobar</p> 
       
    </footer>
)

export default footer;
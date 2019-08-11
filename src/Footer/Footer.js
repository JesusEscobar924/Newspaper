import React from 'react';
import classes from './Footer.module.css'

const footer = () => (
    <footer className={classes.Footer}> 
        <p>&copy; 2019 Jesús Escobar</p> 
        <a href={'https://developer.nytimes.com'}><img  src={'https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1539041473000'} alt={"Data provided by The New York Times"}></img> </a>
    </footer>
)

export default footer;
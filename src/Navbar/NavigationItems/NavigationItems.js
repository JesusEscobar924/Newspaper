import React from 'react';
import Aux from '../../HOC/Auxiliar/aux'
import Button from '../../Button/Button'
const navigationItems = () => (
    <Aux>
        <li><Button boton={"Ciencia"}/></li>
        <li><Button boton={"Tecnologia"}/></li> 
        <li><Button boton={"Economia"}/></li>
        <li><Button boton={"Politica"}/></li>
        <li><Button boton={"Deportes"}/></li>
    </Aux>
    
)

export default navigationItems;
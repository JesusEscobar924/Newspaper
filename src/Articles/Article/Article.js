import React from 'react';
import classes from './Article.module.css';

const article = (props) => (
    <article className={classes.Article}>
      <img className={classes.Image}src={props.imagen}/>  
      <div>
      <h1 className={classes.Title}>{props.titulo}</h1>  
      <p className={classes.Description}>{props.contenido}</p>
      <p className={classes.Author}>{props.autor}</p>
      </div>
     
    </article>
)

export default article;
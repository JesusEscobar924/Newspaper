import React from 'react';
import Article from './Article/Article';
import classes from './Articles.module.css';
import uniqid from 'uniqid';

const articles = (props) => {
    
    let articles = props.articles.map(a => {
        let unid = uniqid();
        return<Article key={unid} titulo={a.title} contenido={a.abstract} autor={a.byline} imagen={a.multimedia[4] ? a.multimedia[4].url : null } />
    });
    console.log(articles)
    
    return(
        <div className={classes.Articles}>{articles}</div>
    )
}
export default articles;
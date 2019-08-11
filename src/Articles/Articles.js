import React from 'react';
import Article from './Article/Article';
import classes from './Articles.module.css';
import uniqid from 'uniqid';
import distanceInWords from 'date-fns/distance_in_words/index'

const articles = (props) => {
    
    let articles = props.articles.map(a => {
        let unid = uniqid();
        let result = distanceInWords(
            new Date(),
            new Date(a.created_date)
          );
        return<Article key={unid} titulo={a.title} url={a.url} contenido={a.abstract} autor={a.byline}
        date={result+ " ago"}
        imagen={a.multimedia[4] ? a.multimedia[4].url : null } caption={a.multimedia[4] ? a.multimedia[4].caption : null}/>
    });
    
    return(
        <div className={classes.Articles}>{articles}</div>
    )
}
export default articles;
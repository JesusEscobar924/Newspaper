import React,{Component} from 'react';
import classes from './Article.module.css';

class article extends Component {
 
  render(){
    return(
      <article style={this.props.imagen ? {gridTemplateColumns: "1fr 4fr" } : { gridTemplateColumns: "4fr" }} className={classes.Article}>
        {this.props.imagen ? <img className={classes.Image} src={this.props.imagen}alt={this.props.caption}/>: null}  
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}><a href={this.props.url}  rel="noopener noreferrer" target="_blank">{this.props.titulo}</a></h1> 
          <p className={classes.Fontmin}>{this.props.date}</p>
          <p className={classes.Description}>{this.props.contenido}</p>
          <p className={classes.Fontmin}>{this.props.autor}</p>
        </div>
    </article>
    )
}
  }
    



export default article;
import React,{Component} from 'react';
import classes from './Article.module.css';

class article extends Component {
 
  render(){
    return(
      <article  className={classes.Article}>
       <a href={this.props.url}  rel="noopener noreferrer" target="_blank"><img className={classes.Image} src={this.props.imagen} alt={this.props.caption}/></a> 

        <div className={classes.TextContainer}>
          <h1 className={classes.Title}><a href={this.props.url}  rel="noopener noreferrer" target="_blank">{this.props.titulo}</a></h1> 
          <p className={classes.Description} style={this.props.contenido.length >= 120 && window.screen.availWidth < 700 ? {display: "none"} : null} >{this.props.contenido}</p>
        </div>

        <div className={classes.Hiden}>
            <p className={classes.Fontmin}>{this.props.date}</p>
            <p className={classes.Fontmin}>{this.props.autor}</p>
        </div>
    </article>
    )
}
  }
    



export default article;
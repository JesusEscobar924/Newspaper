import React,{Component} from 'react';
import classes from './Article.module.css';

class article extends Component {
  constructor(props){
    super(props)
    this.state={
      spans:20,
      loading:true,
    }
    this.imageRef = React.createRef();
    this.articleRef = React.createRef();
    this.textRef = React.createRef();
  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {

    this.setState({loading:false})
   
    let height=0;
    let width=0;
    let proporcion= 0;
    let widthArt=0;
    if(!this.state.loading){
      height = this.imageRef.current.clientHeight;

      width= this.imageRef.current.clientWidth;
      
      widthArt = this.articleRef.current.clientWidth;

      proporcion = (height/width);
    }
    let adicional = Math.round((this.textRef.current.clientHeight/100)+proporcion);
    console.log(adicional)

    const spans = Math.ceil(((proporcion*widthArt)/40))+adicional; 

    this.setState({spans})

 
  }
 
  render(){
    return(
      <article 
        ref={this.articleRef}
        style={{gridRowEnd: `span ${this.state.spans}`}}
        className={classes.Article} >
        <a  
        href={this.props.url}  
        rel="noopener noreferrer" 
        target="_blank">
          <img 
            ref={this.imageRef} 
            className={classes.Image} 
            src={this.props.imagen} 
            alt={this.props.caption}/></a> 

          <div  
            ref={this.textRef}
            className={classes.TextContainer}>
            <h1 
              className={classes.Title}>
                <a href={this.props.url}  
                  rel="noopener noreferrer" 
                  target="_blank">{this.props.titulo}
                </a>
            </h1> 
          
            <p className={classes.Fontmin}>{this.props.date}</p>
            <p className={classes.Fontmin}>{this.props.autor}</p>
        </div>
    </article>
    )
}
  }
    



export default article;
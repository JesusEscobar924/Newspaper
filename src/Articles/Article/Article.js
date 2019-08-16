import React,{Component} from 'react';
import classes from './Article.module.css';

class article extends Component {
  constructor(props){
    super(props)
    this.state={
      spans:0,
      loading:true,
    }
    this.imageRef = React.createRef();
  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    this.setState({loading:false
    })
    let height = 0;
    let width= 0;
    let number=5;
    let proporcion=0;
    if(!this.state.loading){
      height = this.imageRef.current.clientHeight;
      width= this.imageRef.current.clientWidth; 
      proporcion = (height/width);
      if(proporcion<0.5){
        number-=6
      }
      
    }
    if(window.innerWidth<440){
      number-=.5
    }
    if(window.innerWidth>=2000){
      number-=1
    }
    
    
    const result= proporcion * number;
    console.log(proporcion)
    const spans = Math.ceil(height / (10 + result) ); 
    this.setState({spans})
  }
 
  render(){
    return(
      <article style={{gridRowEnd: `span ${this.state.spans}`}} className={classes.Article} >
       <a  href={this.props.url}  rel="noopener noreferrer" target="_blank"><img 
        ref={this.imageRef} className={classes.Image} src={this.props.imagen} alt={this.props.caption}/></a> 

        <div  className={classes.TextContainer}>
          <h1 className={classes.Title}><a href={this.props.url}  rel="noopener noreferrer" target="_blank">{this.props.titulo}</a></h1> 
          
          
            <p className={classes.Fontmin}>{this.props.date}</p>
            <p className={classes.Fontmin}>{this.props.autor}</p>
        
        </div>

        
    </article>
    )
}
  }
    



export default article;
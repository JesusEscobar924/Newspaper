import React,{Component} from 'react';
import Articles from './Articles/Articles';
import Navbar from './Navbar/Navbar';
import SideBar from './Navbar/SideBar/SideBar';
import Spinner from './Spinner/Spinner';
import Footer from './Footer/Footer';
import classes from './App.module.css';
import axios from 'axios';


class App extends Component{
  state ={ 
    articles: [],
    ShowSideBar: false,
    key: "?api-key=jIendE5Ra60B11N5MAOZ6zXjHWBxliPm",
    topic: "home.json",
    loading: false
  }

  componentDidMount(){
    this.requests();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.topic !== this.state.topic){
      this.requests()
    }
  }
  
  
  burgerHandler = () => {
    this.setState((prevState) => { 
        return {showSideBar: !prevState.showSideBar}
    })
  }
  
  buttonClickedHandler = (event) =>{
    let topic = event.target.name;
    this.setState({topic: topic});
    this.burgerHandler();
  }

  logoClickedHandler = () => {
    this.setState({topic: "home.json"});
    
  }

  requests = () => {
    this.setState({loading:true})
    axios.get("https://api.nytimes.com/svc/topstories/v2/"+this.state.topic+process.env.REACT_APP_API_KEY)
    .then(response => this.setState({loading:false ,articles: response.data.results})).catch(err => console.log(err));
  }

  render(){
    

    return (
      <div className={classes.App}>

        <Navbar
          Logo={this.logoClickedHandler}
          btnActived={this.state.topic} 
          ButtonClicked={this.buttonClickedHandler} 
          open={this.state.showSideBar} closed={this.sideBarClosed} 
          BurgerClicked={this.burgerHandler}/>

        <SideBar 
        btnActived={this.state.topic} 
        open={this.state.showSideBar} 
        ButtonClicked={this.buttonClickedHandler} 
        />
  
        {this.state.loading ? <Spinner/> : 
        <Articles articles={this.state.articles ?
        this.state.articles : null}/> }

        <Footer/>
      </div>
    
    )
  ;}
  
}

export default App;

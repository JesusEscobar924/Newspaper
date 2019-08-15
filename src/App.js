import React,{Component} from 'react';
import Layout from './Layout/Layout';
import Spinner from './Spinner/Spinner'
import classes from './App.module.css';


class App extends Component{ 
  state={
    loading:true,
  }
  componentDidMount(){
    this.setState({loading:false})
  }
  render(){
    return (
      this.state.loading ? <div className={classes.Container}><Spinner/></div> : 
      <div className={classes.App}>        
        <Layout/>    
      </div>
    )
  ;}
  
}

export default App;

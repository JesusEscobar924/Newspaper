import React,{Component} from 'react';
import Articles from '../Articles/Articles';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import Showcase from '../Showcase/Showcase';
import SideBar from '../Navbar/SideBar/SideBar';
import Burger from '../Navbar/Burger/Burger';
import classes from './Layout.module.scss';
import axios from 'axios';

class Layout extends Component{
    constructor(props){
        super(props)
        this.state={
            showSideBar: false,
            topic: "home.json",
            loading: false,
            articles: [],
            search:[]
        }
        this.myRef = React.createRef();
        
    }

    componentDidMount(){
        this.requests()
       
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.topic !== this.state.topic ){
          this.requests()
        }
    }


    burgerHandler = () => {
        this.setState((prevState) => { 
            return {showSideBar: !prevState.showSideBar}
        })
       
    }


    showcaseClickedHandler = () => {
        if(this.state.showSideBar){
            this.setState({showSideBar: false});
        }
        
    }
      
    buttonClickedHandler = (event) =>{
        let topic = event.target.name;
        this.setState({topic,articles:[]});
        this.burgerHandler();
        this.scrollClicked();
        
        
    }

    scrollClicked = () => {
        let altura= this.myRef.current.firstChild.clientHeight;
        window.scrollTo(0,altura);
      
    }

    requests = () => {
        this.setState({loading:true})
        axios({
            url: 'http://localhost:5000/articles',
            method: 'post',
            data: {
              topic: this.state.topic
            }
          })
        .then(res=> this.setState({articles : res.data,loading:false})).catch(err=> console.log(err))
    }


    render(){
        let attachedclasses = [classes.Layout]
    
        if(this.state.showSideBar){
            attachedclasses = [classes.Layout, classes.sidebarActive]
        }

        return(
            <div>
                 <SideBar 
                    btnActived={this.state.topic} 
                    open={this.state.showSideBar} 
                    ButtonClicked={this.buttonClickedHandler} 
                />

                <Burger 
                    BurgerClicked={this.burgerHandler} 
                    open={this.state.showSideBar} 
                    closed={this.sideBarClosed}/>

                <div 
                    ref={this.myRef}
                    
                    onClick={this.showcaseClickedHandler} 
                    className={attachedclasses.join(' ')}>

                    <Showcase 
                     className={classes.glitch}
                        sidebarActive={this.state.showSideBar}
                        ScrollClicked={this.scrollClicked}
                    />
                   
                    
                    {this.state.loading ? <Spinner/> : 
                    <Articles topic={this.state.topic.split(".")} articles={this.state.articles ?
                    this.state.articles : null}/> }

                    <Footer/>  
                </div> 
            </div>
                      
            
        )
    }
}

export default Layout;
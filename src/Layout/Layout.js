import React,{Component} from 'react';
import Articles from '../Articles/Articles';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import Hoc from '../higherordercomponents/hoc';
import Showcase from '../Showcase/Showcase';
import SideBar from '../Navbar/SideBar/SideBar';
import Burger from '../Navbar/Burger/Burger';
import classes from './Layout.module.css';
import axios from 'axios';

class Layout extends Component{
    constructor(props){
        super(props)
        this.state={
            showSideBar: false,
            topic: "technology.json",
            loading: false,
            articles: [],
        }
        this.myRef = React.createRef();
    }

    componentDidMount(){
        this.requests();
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
        let altura= this.myRef.current.firstChild.clientHeight;
        let topic = event.target.name;
        this.setState({topic,articles:[]});
        this.burgerHandler();
        window.scrollTo(0,altura);
        
    }

    

    requests = () => {
        this.setState({loading:true})
        axios.get("https://api.nytimes.com/svc/topstories/v2/"+this.state.topic+process.env.REACT_APP_API_KEY)
        .then(response =>this.setState({loading:false ,articles: response.data.results})).catch(err => console.log(err));
    }


    render(){
        let attachedclasses = [classes.Layout]
    
        if(this.state.showSideBar){
            attachedclasses = [classes.Layout, classes.sidebarActive]
        }
        return(
            <Hoc>
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
                        sidebarActive={this.state.showSideBar}
                    />


                    {this.state.loading ? <Spinner/> : 
                    <Articles articles={this.state.articles ?
                    this.state.articles : null}/> }

                    <Footer/>
                </div> 
            </Hoc>
                      
            
        )
    }
}

export default Layout;
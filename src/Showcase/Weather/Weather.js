import React,{Component} from 'react';
import axios from 'axios'
import classes from './Weather.module.css'; 
import Spinner from '../../Spinner/Spinner'
const reqSvgs = require.context ('../../Assets/icons', true, /\.svg$/)

class Weather extends Component{
    state={
        lon:"",
        lat:"",
        temperatura:"",
        key:"",
        icon:"",
        loading:true,
        error: false,
    }
    
    
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.lon !== this.state.lon){
            this.requests();
        }
    }
   
    weatherClicked = () => {
        window.navigator.geolocation.getCurrentPosition(position => this.setState({lon: position.coords.longitude.toString(), lat: position.coords.latitude.toString()}) );
        
    }
    
    requests = () => {
        axios.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=VzbR6vO4JsqZBAUNyGtna0Q8GM0XTAbC&q="+this.state.lat+"," +this.state.lon).then(res =>{
            this.setState({key: res.data.Key})
            axios.get("http://dataservice.accuweather.com/currentconditions/v1/"+this.state.key+"?apikey=VzbR6vO4JsqZBAUNyGtna0Q8GM0XTAbC").then(res =>  this.setState({temperatura: res.data[0].Temperature.Metric.Value.toString().split("."), icon:`./${res.data[0].WeatherIcon}.svg`,loading:false}))
        }).catch(err => this.setState({error: true})) 
    }

    
    render(){
       
        return(
            this.state.error ? <p className={classes.Before}>Network Error</p>:
            <div className={classes.Container} onClick={this.weatherClicked}>
                   <div className={classes.Container}>
                   {this.state.loading ? <p className={classes.Before}>Click Please</p> : <p className={classes.Grados}>{this.state.temperatura[0]+"°C"}</p>} 
                   { this.state.loading ? <Spinner/> : <img className={classes.Icon} src={reqSvgs (this.state.icon)} alt={"Weather"}></img>}
                </div>
            </div>
        )
    }
    
}

export default Weather;


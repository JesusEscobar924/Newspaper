import React,{Component} from 'react';
import axios from 'axios'
import classes from './Weather.module.css'; 
import Spinner from './Spinner/Spinner'
const reqSvgs = require.context ('../../Assets/icons', true, /\.svg$/)

class Weather extends Component{
    state={
        lon:"",
        lat:"",
        temperatura:"",
        icon:"",
        loading:true,
    }
    
   
     weatherClicked = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lon: position.coords.longitude.toString(), lat: position.coords.latitude.toString()})
                this.requests()
            });
            
           
        
    }
    
    requests = () => {
        axios({
            url: 'http://localhost:5000/weather',
            method: 'post',
            data: {
              lat: this.state.lat,
              lon: this.state.lon
            }
          })
        .then(res=> this.setState({temperatura: res.data.temperatura[0], icon:res.data.icon,loading:false}))
        .catch(err=> console.log(err))
    }

    
    render(){
       
        return(
            
            <div className={classes.Container} onClick={this.weatherClicked}>
                    <div className={classes.Container}>
                        {this.state.loading ? <p className={classes.Before}>Click Me</p> : 
                        <p className={classes.Grados}>{this.state.temperatura[0]+"°C"}</p>}

                        { this.state.loading ? <Spinner/> : <img className={classes.Icon} src={reqSvgs (this.state.icon)} alt={"Weather"}></img>}
                    </div>
            </div>
        )
    }
    
}

export default Weather;


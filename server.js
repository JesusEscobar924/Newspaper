const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

if (process.env.NODE_ENV !== 'production'){ require('dotenv').config()};

const api = process.env.REACT_APP_API_KEY;
const weather = process.env.WEATHER_API_KEY;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});



app.post('/articles',(req,res)=>{
  let topic = req.body.topic
  
  axios.get("https://api.nytimes.com/svc/topstories/v2/"+topic+"?api-key="+api)
        .then(response => res.send(response.data.results)).catch(err => console.log(err));
 
}) 

app.post('/weather', (req,res) => {

  let lat = req.body.lat;
  let lon = req.body.lon;
  let file= {
    temperatura:null,
    icon:null
  }

  axios.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="+weather+"&q="+ lat + "," +lon ).then(response =>{ let Key = response.data.Key 
  

  axios.get("http://dataservice.accuweather.com/currentconditions/v1/"+Key+"?apikey="+weather).then(response => {
    file.temperatura = response.data[0].Temperature.Metric.Value.toString().split("."), 
    file.icon = `./${response.data[0].WeatherIcon}.svg`
    res.send(file) 
 
  } 
).catch(err => console.log("Oh no"))}).catch(err => console.log(err))

 
})



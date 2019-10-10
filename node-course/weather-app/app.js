const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const adress = process.argv[2];

if (!adress) {
  console.log('Pleasew provide an adress');
} else {
  
  geoCode(adress, (error, {latitude, longitude, location} )=> {
    if (error) {
      console.log(error);
    }
  
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
  
      console.log(location);
      console.log(forecastData);
    })
  })
  
}


//console.log(process.argv);


// const url = 'https://api.darksky.net/forecast/9e7798a23023b395aef09a22ed063e6d/37.8267,-122.4233?lang=uk&units=si';
// request({url: url, json: true}, (error, response)=>{
//   if(error)
//   {
//     console.log('Unable to connect the weather service');
//   }
//   else if(response.body.error){
//     console.log('Unable find location');
//   }
//   else
//   {
//     console.dir(response.body.daily.data[0].summary + ' It is currently '+ response.body.currently.temperature + ' degrees out. '+ 
//     'There is ' + response.body.currently.precipProbability + '% chance of rain', {depth:null});
//   }
//   //console.dir(response.body.currently, {depth: null});
  
//  });

//  const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWl0ZWtpbGxldmljaDEiLCJhIjoiY2sxMTZydTdqMDFvcDNkcmk2YWJzazF3MyJ9.zxMlqIdYsdkiQkL3ezhk6A';

//  request({url: geoCodeURL, json: true}, (error, response) => {
//   if (error) {
//     onsole.log('Unable to connect to location service');
//   }
//   else if(response.body.features.length === 0){
//     console.log('Unable to find loaction . Try another search.');
//   }
//    else {
//   const latitude = response.body.features[0].center[0];
//   const longitude = response.body.features[0].center[1];
//   console.log(latitude, longitude);
//   } 
  
//  });








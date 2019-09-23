const request = require('request');


const url = 'https://api.darksky.net/forecast/9e7798a23023b395aef09a22ed063e6d/37.8267,-122.4233?lang=uk';
request({url: url, json: true}, (error, response)=>{
  //console.dir(response.body.currently, {depth: null});
  console.dir(response.body.daily.data[0].summary + ' It is currently '+ response.body.currently.temperature + ' degrees out. '+ 
  'There is ' + response.body.currently.precipProbability + '% chance of rain', {depth:null});
 });
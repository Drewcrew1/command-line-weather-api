const https = require('https');
const api = require('./api.json');

function printWeather(weather) {
 const message = `Current tempature in ${weather.location.city} is ${weather.current_observation.temp_f}F `;
  console.log(message);
}

function get(query) {
// connect to API URL
const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
  let body ="";
  // Reade the data
  response.on('data', chunk => {
    body += chunk;
  });
  response.on ('end', () => {
               // parse data
               const weather = JSON.parse(body);
               //console.dir(profile);
  printWeather(weather);

               });

             // print data
});
}
module.exports.get = get;

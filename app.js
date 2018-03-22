const weather = require('./weather');
// join mult values passed as args replace spaces with underscores
const query = process.argv.slice(2).join("_".replace(' ', '_'));

weather.get(query);

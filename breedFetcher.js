const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      if ((response.statusCode < 200) || (response.statusCode >= 300)) {
        console.log(`We can't seem to connect. Please check your URL`);
        return;
      }
      if (!breedName) {
        console.log("Please include a breed name");
        return;
      }
      const data = JSON.parse(body);
      if (!body.includes(breedName)) {
        console.log(`We can't find ${breedName}! Please check your spelling, or enter another breed`);
        return;
      }
      callback(null, data[0].description);
    }
  });
};

module.exports = {
  fetchBreedDescription
};
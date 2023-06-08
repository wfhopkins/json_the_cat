const request = require("request");
const breed = process.argv.splice(2)[0];

const breedFetcher = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.error("Error: ", error);
      return;
    }
    if ((response.statusCode < 200) || (response.statusCode >= 300)) {
      console.log(`We can't seem to connect. Please check your URL`);
      return;
    }
    if (!breed) {
      console.log("Please include a breed");
      return;
    }
    const data = JSON.parse(body);
    if (!body.includes(breed)) {
      console.log(`We can't find ${breed}! Please check your spelling, or enter another breed`);
      return;
    }
    console.log(data[0].description);
  });
};

breedFetcher(breed);


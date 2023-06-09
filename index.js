const {fetchBreedDescription} = require("./breedFetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    callback("Error fetch deatils", error);
  } else {
    callback(description);
  }
});

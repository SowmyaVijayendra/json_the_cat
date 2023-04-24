const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  let userUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;  
    request(userUrl, (error, response, body) => {
      if (error) {
        callback(error,null);
      } else {        
        let data = JSON.parse(body);
        if (!data[0])
          callback("The breed not found!", null);
        else
          callback(null, `${data[0].description}`);
      }
    });  
};

module.exports = {fetchBreedDescription};
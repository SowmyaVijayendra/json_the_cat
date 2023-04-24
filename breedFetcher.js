const request = require("request");
let searchBreed = process.argv[2];
let userUrl = `https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`;


const writeContent = () => {
  return new Promise((resolve, reject) => {
    request(userUrl, (error, response, body) => {
      if (error) {
        return reject(error);
      } else {        
        let data = JSON.parse(body);
        if (!data[0])
          return reject("The breed not found!");
        return resolve(`${data[0].description}`);
      }
    });
  });
};

writeContent()
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
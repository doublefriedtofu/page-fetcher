const fs = require('fs');
const request = require('request');

const URL = process.argv[2];
const localPath = process.argv[3];

const fetch = function(URL, locaPath) {
  // step 1: get url and locapath from the input argument
  // step 2: pass arguments to fetch function
  request(URL, function(error, response, body) {
    // step 3: make http request to a url
    writeFile(body);
  });

  const writeFile = (data) => {
    // step 4: take the response and save to the path
    fs.writeFile(locaPath, data, err => {
      const fileSize = data.length;
      if (!err) {
        console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
      }
    });
  };

};

fetch(URL, localPath);
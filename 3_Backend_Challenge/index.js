const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

  let data = '';
  
  resp.on('data', (chunkData) => {
    data += chunkData;
  })

  // parse json data
  resp.on('end', () => {
    data = JSON.parse(data);
    // loop through data
    for (const key in data) {
      // operate on string
      if (data[key] === 'N/A' || data[key] === '-' || data[key] === '') {
        // remove key if it matches
        delete data[key];
      }
      // operate on array and object
      if (typeof data[key] === 'object') {
        if (Array.isArray(data[key])) {
          // remove key if it matches
          data[key] = data[key].filter((compVal) => compVal !== 'N/A' && compVal !== '-' && compVal !== '')
        } else {
          // loop through nested object
          for (const key1 in data[key]) {
            if (data[key][key1] === 'N/A' || data[key][key1] === '-' || data[key][key1] === '') {
              // remove key if it matches
              delete data[key][key1];
            }
          }
        }
      }
    }
    console.log(JSON.stringify(data));
  })

});
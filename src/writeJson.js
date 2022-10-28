// import writeJson from './writeJson.js';
const write = require("write-json");

/**
 * @name writeJson
 * @description a function allowing to write a json file and save it in another folder
 *
 * @param {String} fileName 
 * @param {Any} data
 *
 *
 */

/**
 * create a function to write a json file and save it in another folder with
 * two variables (fileName & data) fileName is the name of the file and data is
 * the data to be written in the file and exported to use it in index.js file
 */
function writeJson(fileName, data) {
  write(`./data/${fileName}.json`, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File saved successfully");
    }
  });
}

// export
module.exports = {
  writeJson,
};

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

function writeJson(fileName, data) {
  write(`./data/${fileName}.json`, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File saved successfully");
    }
  });
}

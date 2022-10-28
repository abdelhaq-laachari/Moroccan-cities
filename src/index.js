// import cities & regions from the json
let citiesList = require("../json/ville.json");
let regionsList = require("../json/region.json");

// import writeJson from './writeJson.js';

const { writeJson } = require("./writeJson.js");

// create a function to get the each city and add it to the city object
const city = citiesList.map(function (item) {
  return { id: item.id, name: item.ville, label: item.ville };
});

// create a function to get the each region and add it to the region object
const region = regionsList.map(function (item) {
  return { id: item.id, name: item.region, region: item.region };
});

// create a function to get the each city with its region and add it to the cityWithRegion object
const regionWithCities = citiesList.map(function (item) {
    const region = regionsList.filter((reg) => reg.id == item.region)[0].region;
    return { id: item.id, name: item.ville, label: item.ville, region: region }; 
});

// write the city object to a json file with the name city and save it in the data folder
writeJson("city", city);
// write the region object to a json file with the name region and save it in the data folder
writeJson("region", region);
// write the cityWithRegion object to a json file with the name cities_with_region and save it in the data folder
writeJson("cities_with_region", regionWithCities);

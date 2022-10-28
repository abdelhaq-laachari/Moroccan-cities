// import cities & regions from the json
let citiesList = require("../json/ville.json");
let regionsList = require("../json/region.json");

// import writeJson from './writeJson.js';

const { writeJson } = require("./writeJson.js");


const city = citiesList.map(function (item) {
  return { id: item.id, name: item.ville, label: item.ville };
});

const region = regionsList.map(function (item) {
  return { id: item.id, name: item.region, region: item.region };
});

const regionWithCities = citiesList.map(function (item) {
    const region = regionsList.filter((reg) => reg.id == item.region)[0].region;
    return { id: item.id, name: item.ville, label: item.ville, region: region }; 
});

writeJson("cities_with_region", regionWithCities);
writeJson("city", city);
writeJson("region", region);

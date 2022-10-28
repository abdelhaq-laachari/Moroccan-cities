<h1>List of Moroccan cities</h1>

## Table Of Content

- [Table Of Content](#table-of-content)
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [For Cities](#for-cities)
  - [For regions](#for-regions)
  - [For cities count & regions count](#for-cities-count--regions-count)
- [Changelog](#changelog)
- [Thanks for](#thanks-for)
- [License](#license)

## About

All Moroccan cities and their regions are contained in this package, which was created by a Moroccan JavaScript student.<br/>
you can use this page with react select library and create a custom select with search button.

## Installation

```sh
npm i list-of-moroccan-cities
```

## Usage

### For Cities

```js
const cities = require('list-of-moroccan-cities')
```

it's will return an array of objects like this

```json
[
  {
    "id": 102,
    "region_number": 7,
    "name": "Marrakech",
    "region_name": "Marrakech-Safi",
    "uniq_id": "city_80f346f3-7177-44bd-a79c-5a9235d65ea1"
  }
]
```
**Note**: the `uniq_id` property is not constant, that mean it's will changing on every version

### For regions

```js
const { regions } = require("morocco-cities");
```

it's will return an array of objects like this

```json
[
  {
    "id": 12,
    "cities_count": 2,
    "cities_list": ["Awsard", "Oued-Eddahab"],
    "name": "Dakhla-Oued Ed Dahab"
  }
]
```

### For cities count & regions count

```js
const { citisCount, regionsCount } = require("morocco-cities");
```

## Changelog

[Read From Here](./CHANGELOG)

## Thanks for

I want to say Thanks for **Alaouy** because i'm using [his repository data](https://github.com/alaouy/sql-moroccan-cities)

## License

[MIT](./LICENSE)

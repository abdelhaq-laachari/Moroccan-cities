<h1>List of Moroccan cities</h1>

## Table Of Content

- [Table Of Content](#table-of-content)
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [For Cities](#for-cities)
  - [For regions](#for-regions)
  - [For cities count & regions count](#for-cities-count--regions-count)
- [Thanks for](#thanks-for)
- [License](#license)

## About

All Moroccan cities and their regions are contained in this package, which was created by a Moroccan JavaScript student.<br/>
you can use this page with react select library and create a custom select with search button.

## Installation

```sh
npm install list-of-moroccan-cities
```

```sh
yarn add list-of-moroccan-cities
```

## Usage

### For Cities

```js
const { cities } = require("list-of-moroccan-cities");
```

it's will return an array of objects like this

```json
[
  {
    "id": "0",
    "name": "Afourar",
    "label": "Afourar"
  },
  {
    "id": "1",
    "name": "Agadir",
    "label": "Agadir"
  }
]
```

### For regions

```js
const { regions } = require("list-of-moroccan-cities");
```

it's will return an array of objects like this

```json
[
  {
    "id": "1",
    "name": "Tanger-Tétouan-Al Hoceïma",
    "region": "Tanger-Tétouan-Al Hoceïma"
  },
  {
    "id": "2",
    "name": "l'Oriental",
    "region": "l'Oriental"
  }
]
```

### For each city and its region

```js
const { citiesWithRegion } = require("list-of-moroccan-cities");
```

it's will return an array of objects like this

```json
[
  {
    "id": "0",
    "name": "Afourar",
    "label": "Afourar",
    "region": "Béni Mellal-Khénifra"
  },
  {
    "id": "1",
    "name": "Agadir",
    "label": "Agadir",
    "region": "Souss-Massa"
  }
]
```

## Thanks for

I'm using this person's **Alaouy** repository to build this package, so I want to give him a big thank thanks.[his repository data](https://github.com/alaouy/sql-moroccan-cities)

## License

[MIT](./LICENSE)

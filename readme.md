# german-states-bbox

**[Minimal bounding boxes](https://en.wikipedia.org/wiki/Minimum_bounding_box) for German states.** Taken from [`http://osmtipps.lefty1963.de`](http://osmtipps.lefty1963.de/2008/10/api-und-bounding-box.html).

[![npm version](https://img.shields.io/npm/v/german-states-bbox.svg)](https://www.npmjs.com/package/german-states-bbox)
[![build status](https://img.shields.io/travis/derhuerst/german-states-bbox.svg)](https://travis-ci.org/derhuerst/german-states-bbox)
[![dependency status](https://img.shields.io/david/derhuerst/german-states-bbox.svg)](https://david-dm.org/derhuerst/german-states-bbox)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/german-states-bbox.svg)](https://david-dm.org/derhuerst/german-states-bbox#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/german-states-bbox.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install german-states-bbox
```


## Usage

```js
console.log(require('german-states-bbox'))
```

```js
{
	BW: {
	  	minLat: 47.5338000528, maxLat: 49.7913749328,
	  	minLon: 7.5113934084, maxLon: 10.4918239143
	},
	TH: {
		minLat: 50.2042330625, maxLat: 51.6490678544,
		minLon: 9.8778443239, maxLon: 12.6531964048
	}
}
```

You can also consume the data as GeoJSON:

```js
const data = require('german-states-bbox/as-geojson')
console.log(data.BW)
```

```js
{
	type: 'Feature',
	properties: {name: 'BW'},
	geometry: {
		type: 'Polygon',
		coordinates: [[
			[7.5113934084, 47.5338000528],
			[10.4918239143, 47.5338000528],
			[10.4918239143, 49.7913749328],
			[7.5113934084, 49.7913749328],
			[7.5113934084, 47.5338000528]
		]]
	}
}
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/german-states-bbox/issues).

'use strict'

const raw = require('.')

const hasProp = (o, k) => Object.prototype.hasOwnProperty.call(o, k)

const toGeoJSON = (name, shape) => ({
	type: 'Feature',
	properties: {name: name},
	geometry: {
		type: 'Polygon',
		coordinates: [[
			[shape.minLon, shape.minLat],
			[shape.maxLon, shape.minLat],
			[shape.maxLon, shape.maxLat],
			[shape.minLon, shape.maxLat],
			[shape.minLon, shape.minLat] // close ring
		]]
	}
})

const data = Object.create(null)
for (let state in raw) {
	if (hasProp(raw, state)) data[state] = toGeoJSON(state, raw[state])
}

module.exports = data

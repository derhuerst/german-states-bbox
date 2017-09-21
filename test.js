'use strict'

const test = require('tape')
const bboxes = require('./index')

test('should be numbers', (t) => {
	t.plan(6 * Object.keys(bboxes).length)
	for (let state in bboxes) {
		const bbox = bboxes[state]

		t.equal(typeof bbox.minLat, 'number', `minLat of ${state} is invalid`)
		t.equal(typeof bbox.maxLat, 'number', `maxLat of ${state} is invalid`)
		t.equal(typeof bbox.maxLon, 'number', `maxLon of ${state} is invalid`)
		t.equal(typeof bbox.maxLon, 'number', `maxLon of ${state} is invalid`)

		t.ok(bbox.minLat < bbox.maxLat, `${state} is invalid`)
		t.ok(bbox.minLon < bbox.maxLon, `${state} is invalid`)
	}
})

'use strict'

const test = require('tape')
const bbox = require('./index')

test('should be numbers', (t) => {
	t.plan(4 * Object.keys(bbox).length)
	for (let state in bbox) {
		for (let value of bbox[state])
			t.equal(typeof value, 'number', `${state} is invalid`)
	}
})

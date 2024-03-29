/* 
	Polyfill is a piece of code that allows to use the functionality
	of modern Web Apis that older browser do not support.

	Polyfill !== Babel
	
*/

Object.entries([{ key: 'value'}]);

// will be transform to something like: 

'use strict';

var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
var has = require('has');
var callBound = require('call-bind/callBound');
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function entries(O) {
	var obj = RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
}

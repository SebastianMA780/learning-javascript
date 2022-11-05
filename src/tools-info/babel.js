/* 

	Babel is a tool that converts modern js syntax into  
	a compatible version ES5 for older browser. 

	babel !== Polyfill

*/

const test = [1,2,3,4,5]
test.map(t => t * 2)

// will be transform into 

"use strict";
var test = [1, 2, 3, 4, 5];
test.map(function (t) {
  return t * 2;
});
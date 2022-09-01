/* 
	A callback is a function passed as an argument to another function,
	this technique allows a function to call another function.
	This is useful to control the function execution sequence.
*/

function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(2, 2, sum));

//Api-rest
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }

import XMLHttpRequest from 'xmlhttprequest';
const API = ' https://rickandmortyapi.com/api';


function fetchData(urlApi, callback) {
	let xhttp = new XMLHttpRequest.XMLHttpRequest();
	xhttp.open('GET', urlApi, true);
	xhttp.onreadystatechange = (event) => {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText))
			}
		}
	}
	xhttp.send();
}

fetchData(`${API}/character`, (error, data) => {
	if (error) return console.error(error);
	console.log(data);
	fetchData(`${API}/character/${data.results[0].id}`, (error2, data2) => { 
		if (error2) return console.error(error2);															
		console.log(data2);
	});
	//Callback Hell!!!!
	// this code becomes in bunch of nested requests
});
import fetch from 'node-fetch';//library to simulate window.fetch in node;

const START_DATE = '2020-01-01';
const END_DATE = '2020-01-04';
const API_KEY = 'DEMO_KEY';
const NASA_URL = 'https://api.nasa.gov/neo/rest/v1/feed'+//this is called an endpoint,
//it is meant to give specific info from the data base.
`?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;
//this part of url are query parameters, key values pairs 
//that contains info to filter actions of the server;
//structure: they are preceded of '?' and separate with '&';

fetch(NASA_URL) //this will return a promise with data from the server
// Server return an object as promise with lot of data like headers, http status etc.
	.then(res => res.json())  //.json() will return the body as a promise with json content.
	.then( data => console.log({ data }));

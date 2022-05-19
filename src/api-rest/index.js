/* URL STRUCTURE TO MAKE API REST REQUEST */

const START_DATE = '2020-01-01';
const END_DATE = '2020-01-04';
const API_KEY = 'DEMO_KEY'; 
/*
 Api keys is one of the ways to identify who is making requests.
 Authentication !== Authorization 
*/

const NASA_URL = 'https://api.nasa.gov/neo/rest/v1/feed'+//this is called an endpoint,
//it is meant to give specific info from the server.
`?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;
/* this part of url are query parameters, key values pairs 
that contains info to filter actions of the server.
Structure: they are preceded of '?' and separate with '&'.*/

/* REQUESTING */
import fetch from 'node-fetch';//library to simulate window.fetch in node;

export const initialFetch = () => {
	fetch(NASA_URL) 
	//This will return a promise with data from the server.
	//Server return an object as promise with lot of data like headers, http status etc.
		.then(res => res.json())  //.json() will return the body as a promise with json content.
		.then( data => console.log({ data }));
}

/* 
	HTTP Status code: is a message that website's server 
	sends to the browser to indicate request state info.
*/
// https://www.webfx.com/web-development/glossary/http-status-codes/
// 1XX Informational
// 2XX Success
// 3XX Redirection
// 4XX Client Error
// 5XX Server Error
export const watchStatusFetch = () => {
	fetch(NASA_URL) 
		.then(res => console.log({ status: res.status }));
}

/* 
	HTTP METHODS: set of request methods to indicate the 
	desired action to be performed in the server.
*/
//E.X
//get
//post
//put
//patch
//delete
export const getHttpMethod = () => {
	fetch(NASA_URL , {
		method: "GET"
	}) 
		.then(res => res.json())
		.then( data => console.log({ dataHttpMethod: data }));
}

/* 
	HTTP HEADERS: Are extra source of information of each call you make.
	Their job is to represent meta-data associated with an api request and response.
	E.x
	'Content-Type': indicates the format of the data. ==> 'application/json';
*/
export const testingHttpHeaders = () => {
	fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}`, 
	{
		method: "GET",
		headers: {
			'X-API-KEY': 'DEMO_KEY'
		}
	}) 
		.then(res => res.json())
		.then( data => console.log({ apiKeyHeaderTest: data }));
}

/*  
	CORS: 
	-Check if a request is allowed by the server by comparing data in allow-cors-origin-header.
	-Backend can limit with who share info.

	Mode:
	-cors
	-no-cors: all origin can access info
	-same-origin: only same origin can access to info.
*/


/*  Call any method you want to test */
//initialFetch();
//watchStatusFetch();
//getHttpMethod();
testingHttpHeaders();
//HTML Element Selectors
//=============================
var mainTemp = document.querySelector('#mainTemp');
var maxTemp = document.querySelector('#maxTemp');
var minTemp = document.querySelector('#minTemp');
var icon = document.querySelector('#icon');
var description = document.querySelector('#description');
var parsedData;

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  parsedData = JSON.parse(body);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', parsedData); // Print the HTML for the Google homepage.
});
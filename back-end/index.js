var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var request = require('request');


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/NovaPagina', function (req, res) {
  res.send('Essa página é a nova tá?');
});

app.get('/getWeatherbrazil', function (req, res) {
  const request = require('request');
  request('http://api.weatherstack.com/current?access_key=79d3910d60883fe702d8fc141eee0257&query=Brazil', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var parsedBody = JSON.parse(body);
    var temperature = parsedBody["current"] ["temperature"];
    res.send({ temperature }); // Print the HTML for the Google homepage.
  });
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
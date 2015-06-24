var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var path	= require('path');

app.get('/format', function(req, res){
$.getJSON("output.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
});

// recieve data from inputs 

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/src/views"))

app.use(bodyParser.urlencoded({ extended: false }));


// get data from form in creditRequest.html 








var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();


app.use(express.static('.'));
app.use(express.static('node_modules/@wegenenverkeer/ng-kaart-webcomponent'));

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app)
    .listen(443, function () {
        console.log('Ga naar https://apps-local.mow.vlaanderen.be/')
    })
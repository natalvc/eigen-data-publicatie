var express = require('express');

var app = express();

app.use(express.static('.'));
app.use(express.static('node_modules/@wegenenverkeer/ng-kaart-webcomponent'));

app.listen(80, function () {
        console.log('Ga naar http://localhost/')
    })

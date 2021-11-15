var express = require('express')
var app = express()

app.get('/', (req, res) => res.send('Hello nasir'))

var server = app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
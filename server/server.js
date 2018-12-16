var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
	coffee = require("./routers")
	app = express(),
    port = process.env.PORT || 5000;
    

app.use(bodyParser.urlencoded({
    extended: false
}));
    
app.use(bodyParser.json());

app.use(cors());

app.use("/api", coffee);

var server = app.listen(port, function() {

	var host = server.address().address,
		port = server.address().port;

	console.log("reqres app listening at http://%s:%s", host, port);

});
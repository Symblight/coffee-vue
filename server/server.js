var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express(),
    data = require("./data/data.json"),
    port = process.env.PORT || 5000;
    

app.use(bodyParser.urlencoded({
    extended: false
}));
    
app.use(bodyParser.json());

app.use(cors());

app.get("/api/drinks", function(req, res, next) {
	return res.status(200).send({
		data: data.drinks
	});
});

app.get("/api/foods", function(req, res, next) {
	return res.status(200).send({
		data: data.foods
	});
});

app.get("/api/users", function(req, res, next) {
	return res.status(200).send({
		data: data.users
	});
});

app.put("/api/user", function(req, res, next) { // update procent
	return res.status(200);
});

app.post("/api/signup", function(req, res, next) {
	console.log(req.body);
	return res.status(201);
});

app.post("/api/login", function(req, res, next) {
	console.log(req.body);
	return res.status(200);
});


var server = app.listen(port, function() {

	var host = server.address().address,
		port = server.address().port;

	console.log("reqres app listening at http://%s:%s", host, port);

});
var express = require('express'),
	router = express.Router(),
	jwt = require('jsonwebtoken'),
 	bcrypt = require('bcryptjs'),
    drinksJSON = require("../data/drinks.json"),
    foodsJSON = require("../data/foods.json"),
	usersJSON = require("../data/users.json");


router.get("/drinks", function(req, res, next) {
	return res.status(200).send({
		data: drinksJSON.drinks
	});
});

router.get("/foods", function(req, res, next) {
	return res.status(200).send({
		data: foodsJSON.foods
	});
});

router.get("/users", function(req, res, next) {
	return res.status(200).send({
		data: usersJSON.users
	});
});

router.get("/user/:id", function(req, res, next) { // get profile
	const userId = Number(req.params.id);
	const users = usersJSON.users;

	const user = users.find(function(user) {
		return user.id === userId;
	});

	if(!user) {
		return res.status(404).send({
			error: "Missing user"
		});
	}

	return res.status(200).send({
		data: user
	});
});

router.put("/user", function(req, res, next) { // update procent
	return res.status(200);
});

router.post("/signup", function(req, res, next) {
	console.log(req.body);
	var hashedPassword = bcrypt.hashSync(req.body.password, 8);
	
	return res.status(201);
});

router.post("/login", function(req, res, next) {
	// if(!user) {
	// 	return res.status(400),send({
	// 		error: "Missing password or username"
	// 	});
	// }

	// return res.status(200),send({
	// 	data: user
	// });
	return res.status(200);
});

module.exports = router;
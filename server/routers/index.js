var express = require('express'),
	router = express.Router(),
	jwt = require('jsonwebtoken'),
	fs = require('fs'),
	crypto = require('crypto'),
	path = require('path'),
    drinksJSON = require("../data/drinks.json"),
    foodsJSON = require("../data/foods.json"),
	usersJSON = require("../data/users.json");


var secret = "coffeemylife";

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

router.post("/user", function(req, res, next) { // get profile
	const userId = req.body.userId;
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

router.put("/order", function(req, res, next) { // update procent
	const userId = req.body.user;
	const order = req.body.order;
	const userList = usersJSON.users;

	if (order.total > 0) {

		const findUser = userList.find(userlist => userlist.id === userId);
		const index = userList.indexOf(findUser);

		const sale = order.total * (findUser.accumulationСardProcent / 100);
		findUser.accumulationTotal += sale;

		userList[index] = findUser;
		const newUsersJSON = JSON.stringify({users: userList});  

		fs.writeFileSync(path.resolve(__dirname,"../data/users.json"), newUsersJSON); 
		
		return res.status(200).send({
			message: 'Заказ принят!'
		});
	} else {
		return res.status(400).send({
			message: 'Выполните заказ!'
		});
	}
});

router.put("/order/sale", function(req, res, next) {
	const userId = req.body.user;
	const order = req.body.order;
	const userList = usersJSON.users;

	const findUser = userList.find(userlist => userlist.id === userId);
	const index = userList.indexOf(findUser);

	if(findUser.accumulationTotal >= order.total) {

		findUser.accumulationTotal -= order.total;

		userList[index] = findUser;
		const newUsersJSON = JSON.stringify({users: userList});  

		fs.writeFileSync(path.resolve(__dirname,"../data/users.json"), newUsersJSON);

		return res.status(200).send({
			message: 'Заказ принят!'
		});
	} else {
		return res.status(400).send({
			message: 'Недостаточно суммы!'
		});
	}
})

router.post("/signup", function(req, res, next) {
	const userList = usersJSON.users;

	const data = req.body.user;

	const findUser = userList.find(function(user) {
		return user.username === data.username;
	});

	if (!findUser) {
		const user = Object.assign(data, {
			accumulationСardProcent: 10,
			accumulationTotal: 0,
			id: crypto.createHash('md5').update(JSON.stringify(data)).digest("hex")
		});

		userList.push(user);

		const newUsersJSON = JSON.stringify({users: userList});  

		fs.writeFileSync(path.resolve(__dirname,"../data/users.json"), newUsersJSON); 

		var token = jwt.sign({
			user
		}, secret, { expiresIn: 60 * 60 });
		
		return res.status(201).send({
			data: {
				user,
				token
			}
		});
	} else {
		return res.status(400).send({
			error: "Username is exists"
		});
	}
});

router.post("/login", function(req, res, next) {
	var userAuth = req.body;

	const users = usersJSON.users;

	const user = users.find(function(user) {
		return user.username === userAuth.username && user.password === userAuth.password ;
	});

	if(!user) {
		return res.status(404).send({
			error: "Missing user"
		});
	}

	var token = jwt.sign({
		user
	}, secret, { expiresIn: 60 * 60 });


	return res.status(200).send({
		data: {
			token: token,
			user: user
		}
	});
});


module.exports = router;
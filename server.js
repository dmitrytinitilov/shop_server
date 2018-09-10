var express = require('express');
var app = express();

var mongo = require('mongodb');
var host  = 'localhost';
var port  = 27017;
var ObjectId = require('mongodb').ObjectID;

(async function() {

	try {

		var getDb = require('./dbs');
		db = await getDb();

		var routes = require('./routes');
		app = routes(app, db);

		var api = require('./api');
		app = api(app, db);

		var server = app.listen(8081,function(){
			var host = server.address().address;
			var port = server.address().port;

			console.log("Example app listening at http://%s:%s", host, port)
		})

	} catch(e) {
		console.log(e);
	}

})()
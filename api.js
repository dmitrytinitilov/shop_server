var ObjectId = require('mongodb').ObjectID;

module.exports = function(app, db) {


////////////////////////////////////////////////////////
///////  API
////////////////////////////////////////////////////////

	app.get('/api/catalog',function(req,res){

		console.log('init answers');

		(async function() {

			try {
				//res.end('[{"name":"iPhone"},{"name":"Samsung"},{"name":"Huawei"}]');

				var catalog = db.collection("catalog");

				var products = await catalog.find({}).toArray();

				res.end(JSON.stringify(products));

			} catch(e) {
				console.log(e);
			}

		})()
		
	})

	app.get('/api/get_product', function(req,res){
		(async function() {

			try {
				var catalog = db.collection("catalog");

				var product = await catalog.findOne({"_id":ObjectId(req.query.id)})

				res.end(JSON.stringify(product));

			} catch(e) {
				console.log(e);
			}
		})()
	});

	app.get('/api/add_product', function(req,res){
		(async function() {

			try {
				var catalog = db.collection("catalog");

				//req.body.name

				await catalog.insertOne({"name":req.query.name,"description":req.query.description,"price":req.query.price})

				res.redirect('/catalog');
				res.end();

			} catch(e) {
				console.log(e);
			}
		})()
	});

	app.get('/api/remove_product', function(req,res){
		(async function() {

			try {
				var catalog = db.collection("catalog");

				await catalog.deleteOne( {"_id":ObjectId(req.query.id)});
				
				res.end('{result:true}');

			} catch(e) {
				console.log(e);
			}
		})()
	});



	return app

}
module.exports = function(app, db) {

	var bodyParser = require('body-parser')
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	  extended: true
	}));


	app.get('/catalog', function(req,res){
		(async function() {

			try {
				var catalog = db.collection("catalog");

				var products = await catalog.find({}).toArray();

				res.render('products',{products:products});
				//res.end('[{"name":"iPhone"},{"name":"Samsung"},{"name":"Huawei"}]');
			} catch(e) {
				console.log(e);
			}
		})()
	});

	app.get('/add_product', function(req,res){
		(async function() {

			try {
				var catalog = db.collection("catalog");

				//req.body.name

				await catalog.insertOne({"name":req.query.name})

				res.redirect('/');
				res.end();

			} catch(e) {
				console.log(e);
			}
		})()
	});

	return app

}
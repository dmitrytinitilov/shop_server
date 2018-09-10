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

	return app

}
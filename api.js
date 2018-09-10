module.exports = function(app, db) {


////////////////////////////////////////////////////////
///////  API
////////////////////////////////////////////////////////

	app.get('/api/catalog',function(req,res){

		console.log('init answers');

		(async function() {

			try {
				res.end('[{"name":"iPhone"},{"name":"Samsung"},{"name":"Huawei"}]');
			} catch(e) {
				console.log(e);
			}

		})()
		
	})

	return app

}
module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application,res,req);
	});

	application.post('/autenticar', function(req, res){
		application.app.controllers.index.autenticar(application,res,req);
	});
}
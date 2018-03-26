module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.jogo.jogo(application,res,req);
	});
	application.get('/sair', function(req, res){
		application.app.controllers.jogo.sair(application,res,req);
	});
}
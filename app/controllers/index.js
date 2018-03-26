module.exports.index = function (application, res, req) {
    res.render('index');
}


module.exports.autenticar = function (application, res, req) {

    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros, dadosForm: dadosForm });
        return;
    }

    var dbConnection = new application.config.dbConnection();

    var usuariosDAO = new application.app.models.UsuariosDAO(dbConnection);
    usuariosDAO.autenticar(dadosForm,req,res);

}
module.exports.cadastro = function (application, res, req) {
    res.render('cadastro');
}

module.exports.cadastrar = function (application, res, req) {
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
        return;
    }

    var dbConnection = new application.config.dbConnection();

    var usuariosDAO = new application.app.models.UsuariosDAO(dbConnection);

    usuariosDAO.insert(dadosForm);

    res.send('Não existem erros');

}
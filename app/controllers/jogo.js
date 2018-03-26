module.exports.jogo = function (application, res, req) {

    if (req.session.autorizado) {
        res.render('jogo');
    } else {
        res.send('Usuário precis fazer o login');

    }
}


module.exports.sair = function (application, res, req) {
    req.session.destroy(function (err) {
        res.render('index');
    });
}
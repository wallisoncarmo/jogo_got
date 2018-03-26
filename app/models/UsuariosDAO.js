function UsuariosDAO(dbConnection) {
    this._connection = dbConnection;
}

UsuariosDAO.prototype.insert = function (obj) {

    var mongoConnected = this._connection.connectToMongo(function (client, db) {

        const collection = db.collection('usuarios');
        collection.insert(obj);
        client.close();

    });

}

UsuariosDAO.prototype.autenticar = function (obj, req, res) {

    var mongoConnected = this._connection.connectToMongo(function (client, db) {

        const collection = db.collection('usuarios');
        var result = collection.find(obj).toArray(function (err, result) {

            if (result[0] != undefined) {
                req.session.autorizado = true;
                req.session.usuario = result[0].usuario;
                req.session.casa = result[0].casa;
            }else{
                req.session.autorizado = false;
            }

            if (req.session.autorizado) {
                res.redirect("jogo");
            }else{
                res.render("index",{validacao:{}});
            }

        });
        client.close();

    });

}

module.exports = function () {
    return UsuariosDAO;
}
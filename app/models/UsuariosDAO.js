function UsuariosDAO(dbConnection){
    this._connection = dbConnection;
   }
    
   UsuariosDAO.prototype.insert = function(obj){
    
    var mongoConnected = this._connection.connectToMongo(function(client, db){
    
    const collection = db.collection('usuarios');
    collection.insert(obj);
    client.close();
    
    });
    
   }
    
   module.exports = function(){
    return UsuariosDAO;
   }
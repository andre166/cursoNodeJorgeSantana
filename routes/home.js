module.exports = async function(app){

    app.get('/', function(req, res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.models.noticiaModel;

        noticiasModel.getNoticia( connection, function(err, result){
            res.send(result)
        })

    });

};
module.exports = async function(app){

    app.get('/usuario', function(req, res){

        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function( err, result ){

            res.send("Usuario");

        });

    });

}
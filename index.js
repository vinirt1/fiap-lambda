const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE
});

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sqlQuery = "SELECT * FROM aluno";
    
    connection.query(sqlQuery, (err, result) => {
        if(err) {
            throw err;
        } 
        callback(null, result);
    });
};
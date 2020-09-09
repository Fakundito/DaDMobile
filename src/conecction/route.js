  // var mysql      = require('mysql');

  // const express = require('express');
  // const bodyParser = require('body-parser');
  // const mysql = require('mysql');

  // var connection = mysql.createConnection({
  //   host     : 'localhost',
  //   user     : 'me',
  //   password : 'secret',
  //   database : 'my_db'
  // });


  // // connection.connect();
  
  // // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  // //   if (error) throw error;
  // //   console.log('The solution is: ', results[0].solution);
  // // });
  
  // // connection.end();


  // const app = express();

  // // se crea un SET route que retorna la data desde la tabla de usuarios.
  // app.set('/usuarios', function (req, res) {
  //     // Connecting to the database.
  //     connection.getConnection(function (err, connection) {


  //       //ejemplo de hacer un update:
  //       // UPDATE table_name
  //       // SET column1 = value1, column2 = value2, ...
  //       // WHERE condition;

  //     connection.query('UPDATE usuarios SET (column1=value1) WHERE condition ', function (error, results, fields) {
  //       // If some error occurs, we throw an error.
  //       if (error) throw error;

  //       // Getting the 'response' from the database and sending it to our route. This is were the data is.
  //       res.send(results)
  //     });
  //   });
  // });

  // // Starting our server.
  // app.listen(3000, () => {
  // console.log('Go to http://localhost:3000/users so you can see the data.');
  // });
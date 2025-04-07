

var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'productos'
});

conexion.connect((error)  => {
    if (error) {
        console.log('El error de conexion es: ' + error);
    } else {
        console.log('Conectado a la base de datos');
    }
});	
conexion.end();

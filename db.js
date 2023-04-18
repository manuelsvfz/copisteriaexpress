let mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    database: 'copisteria',
    user: 'root',
    password: '',
    port: 3306
});

db.connect(function (err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + db.threadId);
});

module.exports = db;
const mysql =require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    database: 'Node'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:'+error);
        return
    }

    console.log('!Conectado a la BD MYSQL¡');
})

module.exports = conexion;
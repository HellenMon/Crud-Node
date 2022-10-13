const mysql =require('mysql');

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'n0m3l0',
    database: 'Node',
    //port:"5000",
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:'+error);
        return
    }

    console.log('!Conectado a la BD MYSQL¡');
})

module.exports = conexion;
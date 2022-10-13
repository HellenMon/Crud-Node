const mysql =require('mysql');

const conexion = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'n0m3l0',
    database: 'Node',
    port:"3001",
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:'+error);
        return
    }

    console.log('!Conectado a la BD MYSQL¡');
})

module.exports = conexion;
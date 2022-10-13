const mysql =require('mysql');

const conexion = mysql.createConnection({
    host: 'containers-us-west-76.railway.app',
    user: 'root',
    password: 'RaFcWqR9T2Q74gXdIQXJ',
    database: 'railway',
    port:"6805",
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:'+error);
        return
    }

    console.log('!Conectado a la BD MYSQL¡');
})

module.exports = conexion;
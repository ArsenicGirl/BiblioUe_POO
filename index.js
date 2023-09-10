//Importar la librería
const express = require("express");
const mysql = require("mysql");
//const mysqlConexion = require ("./conexion");
const cors = require ('cors');
const { json } = require ('express');
const database = require("mime-db");

//crear el objeto para llamar los metodos de express
const app = express();


app.use(express.json());
app.use(cors());

//estableceer parametros de concexion ala base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'biblioue'
})

//configurar el html para usar el ejs
//app.set("view engine", "ejs");

//conexion a la base de datos
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion existosa");
    }
})

//para que muestre la pagina inicial (es la ruta raiz)
app.get("/views/index.html", function(req,res){
    res.render("index")
})

// Ruta para obtener y mostrar datos de una tabla
app.get("/api/student", function(req, res) {
 // Consulta SQL para seleccionar TODOS los registros de una tabla (por ejemplo, 'mi_tabla')
    connection.query('SELECT * FROM student', function(error, results) {
      if (error) {
        throw error;
      }else{
        res.send(results);
      }
   
    });
  });

// Consulta SQL para seleccionar TODOS los registros de una tabla 
app.get("/api/student/:stud_id", function(req, res) {
       connection.query('SELECT * FROM student WHERE stud_id = ?', [req.params.stud_id], function(error, results) {
        if (error) {
           throw error;
        }else{
           res.send(results);
           //res.send(results[0].stud_firstName);
        }
      
    });
});
   

app.post("/api/student", function(req, res) {
    let data = {stud_firstName:req.body.stud_firstName, stud_lastName:req.body.stud_lastName, stud_email:req.body.stud_email, stud_password:req.body.stud_password, stud_carnet:req.body.stud_carnet}
    let sql = "INSERT INTO student SET ?";
    connection.query(sql, data, function(error, results){
        if (error) {
            throw error;
         }else{
            res.send(results);
         }
    });
});


//configurar el puerto usado para el servidor local
app.listen(3000,function() {
    console.log("Servidor creado http://localhost:3000");
})

//Recordar, siempre que se quiera ver, despues de hacer cambios
//hay que ecribir en el terminar "node app.js" y luego
//copiar la ruta del localhost en el buscador google
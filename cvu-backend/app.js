import express from "express";
import cors from "cors";

import db from "./src/database/db.js";
import routerUserRegister from "./src/routes/userRegisterRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use('/registro', routerUserRegister);

try {
    await db.sync({force: false});
    console.log("Conexion exitos a la Data Base");
    
} catch (error) {
    console.log(`El error de la conexion es: ${error}`)    
}

/* app.get('/', (req, res) =>{
    res.send('Hola Mundo')
}); */
//Comprobamos el estado del servidor
app.listen(8001, ()=>{
    console.log('Server up running in http://localhost:8001');
});
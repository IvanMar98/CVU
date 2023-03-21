//importamos la conexion de la base de datos
import db from "../database/db.js";

//importamos sequlize
import { DataTypes } from "sequelize";

//definimos el modelo

const UserRegistroModel = db.define('userregistro', {
    id_registro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_paterno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_materno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

export default UserRegistroModel;
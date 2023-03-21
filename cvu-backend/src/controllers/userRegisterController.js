//importamos el modelo UserRegistroModel

import UserRegistroModel from "../models/userRegisterModel.js";

//Metodos para registrar un nuevo usuario

//Crear un usuario
export const registrarNuevoUsuario = async (req, res) =>{
    try {
        const newUserRegister = await UserRegistroModel.create(req.body);
        res.json(newUserRegister);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};
//Obtener todos los usuarios
export const getUsers = async (req, res) => {
    const users = await UserRegistroModel.findAll();
    res.json(users);
}
//Obtener usuario por Id
export const getUserById = async (req, res) => {
    const user = await UserRegistroModel.findByPk(req.params.id_registro);
    if (user === null) {
        res.json('User not found!')
    } else {
        res.json(user);
    }
}
//Modificar usuario por Id
export const updateUserById = async (req, res) => {
    try {
        const updateUser = await UserRegistroModel.update(req.body, {
            where : {id_registro:req.params.id_registro}
        });
        res.json('User updated');
    } catch (error) {
        res.json(error.message);
    }
}
//Eliminar un usuario
export const deleteUserById = async (req, res) => {
    try {
        await UserRegistroModel.destroy({
            where: {id_registro:req.params.id_registro}
        });
        res.json('User deleted complete')
    } catch (error) {
        res.json(error.message);
    }

}
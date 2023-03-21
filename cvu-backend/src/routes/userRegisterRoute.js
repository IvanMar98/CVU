//importamos expres para hacer uso del enrutador que ya nos ofrece 
import express from "express";
import { deleteUserById, getUserById, getUsers, registrarNuevoUsuario, updateUserById } from "../controllers/userRegisterController.js";

const routerUserRegister = express.Router();

routerUserRegister.post('/', registrarNuevoUsuario);
routerUserRegister.get('/', getUsers);
routerUserRegister.get('/:id_registro', getUserById);
routerUserRegister.put('/:id_registro', updateUserById);
routerUserRegister.delete('/:id_registro', deleteUserById);

export default routerUserRegister;
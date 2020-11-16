const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

const { getUsers, getUserById, createUser, loginUser, cambiarUserPasswd} = require('../controllers/index.controller');

//crear Usuarios
router.post('/register', createUser);
router.get('/register', getUsers );
router.get('/register/:id', getUserById);

//loguear usuarios
router.post('/login', loginUser);
router.get('/login', getUsers );
router.get('/login/:id', getUserById);

//cambiarContra
router.post('/newPsswd', cambiarUserPasswd);

module.exports = router;
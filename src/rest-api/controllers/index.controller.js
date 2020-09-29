const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'diario',
    database: 'DiarioAdiario',
    port: 5433
});
//metodo GET, es decir trae los usuarios, lo usaremos para verificar que funcione la conexion
const getUsers = async (req, res) => {
    console.log("estamos tomando usuarios")
    const response = await pool.query('SELECT * FROM registerUser')
    res.status(200).json(response.rows);
};

//metodo post, es decir postea usuarios
//la tabla "registerUser" es en la cual se registraran las personas que usen RegisterScreen
const createUser = async (req, res) => {
    console.log("entro a create user")
    const { username, email, contraseña } = req.body;
    console.log("username: " + username, "email: " + email, "contraseña: " + contraseña)
    const response = await pool.query('INSERT INTO registerUser (username, email, contraseña) VALUES ($1, $2, $3)', [username, email, contraseña]);
    console.log(response.rows);
    res.json({
        message: 'Usuario agregado correctamente!',
        body: {
            usersadmin: { username, email, contraseña }
        }
    })
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    console.log("id: " + id);
    const response = await pool.query('SELECT * from registerUser WHERE id = $1', [id]);
    res.json(response.rows);
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
}
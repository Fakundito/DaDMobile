const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'diario',
    database: 'DiarioAdiario',
    port: 5433
});

//metodo post, es decir postea usuarios
const createUser = async (req, res) => {
    console.log("se hizo un POST a registerUser");
    const { username, email, contraseña } = req.body;
    console.log("username: " + username, "email: " + email, "contraseña: " + contraseña);
    const response = await pool.query('INSERT INTO registerUser (username, email, contraseña) VALUES ($1, $2, $3)', [username, email, contraseña]);
    console.log(response.rows);

    res.json({
        message: 'Usuario agregado correctamente!',
        body: {
            usersadmin: { username, email, contraseña }
        }
    })
}

//los usuarios que se logueen ,lo haran en la misma tabla que register.
const loginUser = async (req, res) => {
    console.log("entro a loguear user")

    const { username, contraseña } = req.body;
    const id = req.params.id;
    console.log("username: " + username, "contraseña: " + contraseña);

    const query = "SELECT id,username,contraseña FROM registerUser AS ru WHERE ru.username = '" + username + "'\;";
    console.log(query);
    const response = await pool.query(query);
    console.log(response.rows);

    const token = jwt.sign(
        { id: user.id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' });
    res.status(200).json({
        id: user.id,
        token: token
    });

    const body = {}

    const l = response.rows
    if (l.length == 0) {
        body["message"] = "Usuario Incorrecto, no existe."
        console.log("Usuario Incorrecto, no existe.");
    } else {
        userEncontrado = false;
        l.forEach(user => {
            if (userEncontrado == false && user.contraseña == contraseña) {
                console.log("Usuario Logueado");
                userEncontrado = true;
                body["message"] = "Usuario Logueado"
            }
        })
        if (userEncontrado == false) {
            console.log("Contraseña incorrecta");
            body["message"] = "Contraseña incorrecta"
            return res.status(401).json({
                error: new Error('Incorrect password!')
            });
        }
    }
    res.json({
        message: 'Usuario agregado correctamente!',
        body: body
    })
}

const cambiarUserPasswd = async (req, res) => {
    console.log("se hizo un POST a registerUser de la new contraseña");
    const { username, contraseña } = req.body;
    console.log("username: " + username, "contraseña: " + contraseña);
    const response = await pool.query("UPDATE registerUser SET (contraseña) = '" + contraseña + "'WHERE username = '" + username + "';");
    console.log(response.rows);
    res.json({
        message: 'Usuario agregado correctamente!',
        body: {
            usersadmin: { username, contraseña }
        }
    })
}

//metodo GET, es decir trae los usuarios, lo usaremos para verificar que funcione la conexion
const getUsers = async (req, res) => {
    console.log("se hizo un GET de todos los usuarios")
    const response = await pool.query('SELECT * FROM registerUser')
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    console.log("se hizo un GET por ID de todos los usuarios")
    const id = req.params.id;
    console.log("id: " + id);
    const response = await pool.query('SELECT * from registerUser WHERE id = $1', [id]);
    res.json(response.rows);
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    loginUser,
    cambiarUserPasswd,
}

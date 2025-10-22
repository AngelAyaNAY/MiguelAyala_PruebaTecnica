const db = require("./../model_db/adaptador_db");

const GET_USUARIOS = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM usuarios;");
        res.json(result.rows);
    } catch (errr) {
        console.log(`Error: ${errr}`);
        res.status(500).json({ errr: 'Error al obtener usuarios.' });
    }
}

const CREATE_USUARIOS = async (req, res) => {
    const { nombre, correo, edad } = req.body;

    try {
        const CREATE = 'INSERT INTO usuarios (nombre, correo, edad) VALUES ($1,$2,$3);';
        await db.query(CREATE, [nombre, correo, edad]);
        console.log("Dato creado exitosamente.");
        res.json({ mensaje: "Datos cargados exitosamente." })
    } catch (errr) {
        console.error('Datos no creados:', errr);
    }
}

const UPDATE_USUARIOS = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, edad } = req.body;

    try {
        const query = `
      UPDATE usuarios 
      SET nombre = $1, correo = $2, edad = $3 
      WHERE id = $4
    `;
        await db.query(query, [nombre, correo, edad, id]);
        console.log("Dato creado exitosamente.");
        res.json({ mensaje: "Dato actualizado exitosamente." });
    } catch (errr) {
        console.error("Datos no se pudieron actualizar:", errr);
    }
}

const DELETE_USUARIOS = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM usuarios WHERE id = $1;", [id]);
        res.json({ mensaje: "Dato eliminado exitosamente." })
    } catch (errr) {
        console.error("No se ha podido eliminar el dato: ", errr);
        res.status(500).json({ error: 'Error al eliminar el usuario.' });
    }
}


module.exports = {
    GET_USUARIOS,
    CREATE_USUARIOS,
    UPDATE_USUARIOS,
    DELETE_USUARIOS
}
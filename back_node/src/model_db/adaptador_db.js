const { Pool } = require("pg")
const nomDatabase = "db_postgresql_angel"

const db = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: nomDatabase,
    port: 5432,
})

db.connect((err, client, release) => {
    if (err) {
        console.error('\n\x1b[31m', "Error al conectar a la base de datos.\n\n", err, '\x1b[0m\n');
        return;
    }
    console.log(`\x1b[36m     Conexión exitosa a la base de datos "${nomDatabase}"`, '\x1b[0m\n');
    release();
});

db.on("SIGINT", async () => {
    await db.end();
    console.log("\n\x1b[33mConexión con PostgreSQL cerrada correctamente.\x1b[0m");
    process.exit();
})

module.exports = db;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routerUser = require("./routers/users_router")

const app = express();
const PORT = process.env.PORT || 3001;

const optionsCors = {
    origin: "http://localhost:4200",
    methods: 'GET, POST, PUT, DELETE',
    optionsSuccessStatus: 200,
}
app.use(cors(optionsCors));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/data', routerUser)

const fechaVenta = new Date().toISOString().split('T')[0];
const horaVenta = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

app.listen(PORT, () => {
    console.log(`\n\n---------------------------*////*---------------------------\n`);
    console.log(`     El servidor funcionando en el puerto: \x1b[33m[${PORT}]\x1b[33m.`);
    console.log(`\n     Local:                  http://localhost:${PORT}\x1b[0m\n`);
    console.log(`     Fecha actual: [${fechaVenta}], Hora actual: [${horaVenta}].\n`);
    console.log(`---------------------------*////*---------------------------\n`);
})
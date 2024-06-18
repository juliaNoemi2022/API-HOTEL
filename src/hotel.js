const express = require('express');
const bodyParser = require('body-parser');
const app = express();





const RouteProdu = require("../src/Routes/productos.route");
const RouteCliente = require("../src/Routes/clientes.route");
const RouteReservas = require("../src/Routes/reservas.route"); 
const RouteHabitacion = require("../src/Routes/habitaciones.route")
const RouteRegistro = require("../src/Routes/registro.route")
const port = 3001;












app.listen(port, (req, res) => {console.log("Listening on port " +port)});


app.use(bodyParser.json());





app.use("/productos", RouteProdu.rutaProducto)
app.use("/habitaciones",RouteHabitacion.rutaHabitacion)
app.use("/clientes", RouteCliente.rutaCliente)
app.use("/reservas", RouteReservas.rutaReserva)
app.use("/registros", RouteRegistro.rutaRegistro)






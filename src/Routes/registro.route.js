const express = require("express");

const rutaRegistro = express.Router();


const registration = require("../Controllers/registro.controllers")
const registrationProd = require("../Controllers/registroProductos.controllers")

const middlewareReservas = require("../Middleware/reserva.middleware")

const middlewareReservaHabi = require("../Middleware/reserva.middleware")

const middlewareHabi = require("../Middleware/habitaciones.middleware")

const middlewareProdu = require("../Middleware/registro.producto.middleware")

const middlewareRegistroHabi = require("../Middleware/registro.middleware")

const middlewareRegistroProdu = require("../Middleware/registro.producto.middleware")

const middlewareProductos = require("../Middleware/productos.middleware")

const middlewareReservaProdu = require("../Middleware/reserva.producto.middleware")


const middlewareFuncion = require("../Middleware/funcion.middleware")

const registroHabitacionesSchema = require("../Schemas/registro.schemas")
const registroProductosSchema = require("../Schemas/registro.producto.schemas")
const schemaValidator = require("../Middleware/schema.validator");
const schemaValidatorURL = require("../Middleware/schema.validatorURL")
const SchemaURL = require("../Schemas/schemas.URL")


rutaRegistro.get("/habitaciones",registration.totalRegistroHab);

rutaRegistro.get("/habitaciones/:id",schemaValidatorURL(SchemaURL),middlewareRegistroHabi.existeRegistroHabiVencido,middlewareRegistroHabi.existeRegistrohabByID,registration.buscarRegistrohab);

rutaRegistro.get("/habitaciones/vencidos",registration.registrosVencidasHab);

rutaRegistro.post("/habitaciones/checkin/:id",schemaValidatorURL(SchemaURL),middlewareReservaHabi.existeReservaPorId,middlewareHabi.existeHabitacionPorId2,middlewareReservaHabi.existeReservaHabitacionesVencidaByID,registration.check_inHab);

rutaRegistro.put("/habitaciones/checkout/:id", schemaValidatorURL(SchemaURL),schemaValidator(registroHabitacionesSchema),middlewareRegistroHabi.existeRegistrohabByID,middlewareHabi.existeHabitacionPorId3,registration.check_outHab);


rutaRegistro.delete("/habitaciones/:id", schemaValidatorURL(SchemaURL),middlewareRegistroHabi.existeRegistrohabByID,registration.borrarRegistroHab);


rutaRegistro.put("/habitaciones/:id",schemaValidator(registroHabitacionesSchema),middlewareRegistroHabi.existeRegistrohabByID,middlewareHabi.existeHabitacionPorId3,middlewareHabi.controlCapacidadHabitacion,middlewareReservaHabi.existeHabitacionPorIdReserva,middlewareRegistroHabi.existeHabitacionPorIdRegistro,middlewareFuncion.existeReservaRegistroHabitacionPorFecha3,middlewareReservas.ReservaHabitacionesControlFechas,registration.modiRegistroHab,middlewareRegistroHabi.existeRegistroHabiPorIdMostrar);





rutaRegistro.get("/productos/:id", schemaValidatorURL(SchemaURL),middlewareProdu.existeProductoVencido,registrationProd.buscarRegistroProd);


rutaRegistro.get("/productos", registrationProd.totalRegistroProd);

rutaRegistro.get("/productos/vencidos", middlewareProdu.existeProductoVencido); 

rutaRegistro.post("/productos/checkin/:id",schemaValidatorURL(SchemaURL),middlewareProdu.existeProductoPorIdReservaProdus,middlewareReservaProdu.existeReservaProductosVencidoByID ,registrationProd.check_in);


rutaRegistro.delete("/productos/:id", schemaValidatorURL(SchemaURL),middlewareRegistroProdu.ProductoPorIdRegistroProdus,registrationProd.borrarRegistroProd);

rutaRegistro.put("/productos/:id",schemaValidatorURL(SchemaURL),schemaValidator(registroProductosSchema),middlewareRegistroProdu.ProductoPorIdRegistroProdus,middlewareProductos.existeProductoPorId3,registrationProd.modiRegistroProd, middlewareRegistroProdu.existeRegistroProduPorIdMostrar);



module.exports = {rutaRegistro}
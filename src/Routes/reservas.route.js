const express = require("express");

const rutaReserva = express.Router();


const reservation = require("../Controllers/reservas.controllers");

const middleware = require("../Middleware/habitaciones.middleware")

const middlewareCliente = require("../Middleware/cliente.middleware")

const middlewareReserva = require("../Middleware/reserva.middleware")

const middlewareRegistro = require("../Middleware/registro.middleware")

const middlewareFuncion = require("../Middleware/funcion.middleware")

const middlewareHabi = require("../Middleware/habitaciones.middleware")

const middlewareReservaProdu = require("../Middleware/reserva.producto.middleware")

const middlewareProdu = require("../Middleware/productos.middleware")

const reservaSchema = require("../Schemas/reservas.schemas")
const reservaProductoSchema = require("../Schemas/reservas.producto.schemas")
const schemaValidator = require("../Middleware/schema.validator");
const schemaValidatorURL = require("../Middleware/schema.validatorURL")
const SchemaURL = require("../Schemas/schemas.URL")



rutaReserva.get("/habitaciones",reservation.totalReservasHab);

rutaReserva.get("/habitaciones/vencidas",reservation.reservasVencidasHab);

rutaReserva.get("/habitaciones/:id",schemaValidatorURL(SchemaURL),middlewareReserva.existeReservaHabitacionesVencida,middlewareReserva.existeReservaPorId ,reservation.buscarReservarHabi);

rutaReserva.post("/habitaciones/:num", schemaValidatorURL(SchemaURL),schemaValidator(reservaSchema),middleware.existeHabitacionPorNumero,middlewareReserva.existeHabitacionPorIdReserva,middlewareRegistro.existeHabitacionPorIdRegistro,middlewareReserva.ReservaHabitacionesControlFechas,middlewareFuncion.existeReservaRegistroHabitacionPorFecha,middlewareCliente.validarNoExisteClientePorDni,middlewareHabi.controlCapacidadHabitacion,reservation.crearReservarHabi);



rutaReserva.delete("/habitaciones/:id",schemaValidatorURL(SchemaURL),middlewareReserva.existeReservaPorId ,reservation.borrarReservaHab);



rutaReserva.put("/habitaciones/:id",schemaValidatorURL(SchemaURL),schemaValidator(reservaSchema),middlewareReserva.existeReservaPorId,middlewareCliente.validarNoExisteClientePorDni,middlewareHabi.existeHabitacionPorId2,middlewareHabi.controlCapacidadHabitacion,middlewareReserva.existeHabitacionPorIdReserva,middlewareRegistro.existeHabitacionPorIdRegistro,middlewareReserva.ReservaHabitacionesControlFechas,middlewareFuncion.existeReservaRegistroHabitacionPorFecha2,reservation.modiReservaHab);


rutaReserva.get("/productos", reservation.totalReservasProdu);

rutaReserva.get("/productos/:id",schemaValidatorURL(SchemaURL),middlewareReserva.existeReservaProductoVencida,middlewareReserva.existeReservaProductoPorId ,reservation.buscarReservaProdu);


rutaReserva.post("/productos/:id",schemaValidatorURL(SchemaURL),schemaValidator(reservaProductoSchema),middlewareReservaProdu.existeProductoPorId,middlewareCliente.validarNoExisteClientePorDni,reservation.crearReservaProdu);

rutaReserva.get("/productos/vencidas", reservation.reservasVencidasProdu) 

rutaReserva.delete("/productos/:id", schemaValidatorURL(SchemaURL),middlewareReserva.existeReservaProductoPorId, reservation.borrarReservaProdu);

rutaReserva.put("/productos/:id",schemaValidatorURL(SchemaURL),schemaValidator(reservaProductoSchema),middlewareReserva.existeReservaProductoPorId,middlewareCliente.validarNoExisteClientePorDni,middlewareProdu.existeProductoPorId2,reservation.modiReservaProd,middlewareReserva.existeReservaProduPorIdMostrar);



module.exports = {rutaReserva}
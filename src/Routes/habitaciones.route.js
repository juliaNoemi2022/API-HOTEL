const express = require("express")


const registrationHab = require("../Controllers/habitaciones.controllers")

const middleware = require("../Middleware/habitaciones.middleware")

const schemaValidator = require("../Middleware/schema.validator")
const schemaValidatorURL = require("../Middleware/schema.validatorURL")
const SchemaURL = require("../Schemas/schemas.URL")
const habitacionSchema = require("../Schemas/habitaciones.schemas")

const rutaHabitacion = express.Router()



rutaHabitacion.get("/",registrationHab.totalHabitaciones );

rutaHabitacion.get("/:num",schemaValidatorURL(SchemaURL),middleware.existeHabitacionPorNumero ,registrationHab.buscarHabitacion );

rutaHabitacion.post("/",schemaValidator(habitacionSchema),middleware.validarExisteHabitacionPorNumero ,registrationHab.crearHabitacion);

rutaHabitacion.delete("/:num",schemaValidatorURL(SchemaURL),middleware.existeHabitacionPorNumero,registrationHab.borrarHabitacion );



module.exports = {rutaHabitacion}
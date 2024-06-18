const express = require("express");



const rutaCliente = express.Router();

const middlewareCliente = require("../Middleware/cliente.middleware")

const cliente = require("../Controllers/clientes.controllers");
const schemaValidator = require("../Middleware/schema.validator");
const schemaValidatorURL = require("../Middleware/schema.validatorURL"); 
const clienteSchema = require("../Schemas/clientes.schemas")
const SchemaURL = require("../Schemas/schemas.URL")



rutaCliente.get("/:dni",schemaValidatorURL(SchemaURL),middlewareCliente.validarNoExisteClientePorDni2,cliente.buscarCliente);

rutaCliente.get("/",cliente.totalCliente);


rutaCliente.post("/",schemaValidator(clienteSchema),middlewareCliente.validarExisteClientePorDni ,cliente.crearCliente);

rutaCliente.delete("/:dni",schemaValidatorURL(SchemaURL),middlewareCliente.validarNoExisteClientePorDni2, cliente.borrarCliente);


module.exports = {rutaCliente}
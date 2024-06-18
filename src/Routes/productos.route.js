const express = require("express")

const productos = require("../Controllers/productos.controllers")

const middleware = require("../Middleware/productos.middleware")

const productoSchema = require("../Schemas/productos.schemas");

const schemaValidator = require("../Middleware/schema.validator");
const schemaValidatorURL = require("../Middleware/schema.validatorURL")
const SchemaURL = require("../Schemas/schemas.URL")



const rutaProducto = express.Router()

rutaProducto.get("/",productos.totalProductos);

rutaProducto.get("/:id",schemaValidatorURL(SchemaURL),middleware.existeProductoPorId,productos.buscarProductos);

rutaProducto.delete("/:id",schemaValidatorURL(SchemaURL),middleware.existeProductoPorId,productos.borrarProducto);


rutaProducto.post("/",schemaValidator(productoSchema),productos.crearProducto);




module.exports = {rutaProducto}
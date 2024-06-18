# API REST DE HOTEL
 Esta aplicación permite gestionar los clientes, habitaciones, productos y reservas de una empresa hotelera.


 ## Lanzar la aplicacion
asegurarse que estén instaladas estas dependencias 
```
"dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.19.2",
    "joi": "^17.13.1",
    "moment": "^2.30.1",
    "nodemon": "^3.1.0",
    "pg": "^8.11.5",
    "sequelize": "^6.37.2"
  },
  "devDependencies": {
    "sequelize-cli": "^6.6.2"
  }
```
 En caso de no estar instaladas, se debe correr el siguiente comando para instalarlas: 

```npm install```

A continuación, se puede lanzar la aplicacion. Por defecto la aplicación se inicia en el puerto 3001 pero se puede cambiar a otro valor siemplemente configurando la variable de entorno PORT en su sistema operativo. 

Correr el comando

 ```npm run dev```






 ## Base de datos 
Esta aplicación utiliza una base de datos postgres que nos permite persistir la informacion para realizar operaciones de consulta, creación, modificación y eliminación de Clientes, Habitaciones, Productos, Reservas y registros. Con pequeños cambios en la configuracion se puede utilizar con otros motores de base de datos.

## Modelo de datos
El modelo de datos posee 7 tablas
* Clientes
* Habitaciones
* Reservas
* Productos
* RegistroHabis
* reservaProdus
* RegistroProdus

# Diagrama de base de datos 

![Diagrama de base de datos](./imagen/diagrama%20de%20base%20de%20datos.png
)

 ## Si ya se tiene Docker y dbeaver
 Hacer correr el siguiente comando

  ```npx sequelize-cli db:migrate```



# Endpoints de la aplicación

### Clientes

| verbo |  endpoint  |descripcion|
|-------|------------|-----------|
|  GET  |/clientes/:dni|Recupera un Cliente por su DNI|
|  GET  |/clientes     |Recupera el total de Clientes registrados|
| POST  |/clientes     |Crea un nuevo Cliente|
|DELETE|/clientes/:dni |Elimina un Cliente por su DNI| 


### Productos

| verbo |  endpoint  |descripcion|
|-------|------------|-----------|
|  GET  |/productos/:id|Recupera un Producto por su ID|
|  GET  |/productos     |Recupera el total de Productos existentes|
| POST  |/productos     |Crea un nuevo Producto|
|DELETE|/productos/:id |Elimina un Producto por su ID|


### Habitaciones 

| verbo |  endpoint  |descripcion|
|-------|------------|-----------|
|  GET  |/habitaciones/:num|Recupera una Habitación por su número|
|  GET  |/habitaciones|Recupera el total de Habitaciones existentes|
| POST  |/habitaciones |Crea una nueva Habitación|
|DELETE|/habitaciones/:id|Elimina una Habitación por su número|



### Registros

| verbo |  endpoint  |descripcion|
|-------|------------|-----------|
|  GET  |/Registros/habitaciones/:id|Recupera un Registro de Habitación por su ID|
|  GET  |/Registros/habitaciones|Recupera el total de Registro de Habitaciones existentes|
|  GET  |/Registros/habitaciones/vencidos|Recupera el total de Registros de Habitaciones vencidas existentes|
|  GET  |/Registros/productos/:id|Recupera un Registro de un Producto por su ID|
|  GET  |/Registros/productos|Recupera el total de Registros de Productos existentes|
|  GET  |/Registros/productos/vencidos|Recupera el total de Registros de Productos vencidos existentes|
| POST  |/Registros/habitaciones/checkin/:id |Realiza el check-in de una Habitación|
| POST  |/Registros/productos/checkin/:id |Realiza el check-in de un Producto|
| PUT  |/Registros/habitaciones/checkout/:id |Realiza el check-out de una habitación|
| PUT  |/Registros/habitaciones/:id |Realiza modificaciones de una Habitación existente|
| PUT  |/Registros/productos/:id |Realiza modificaciones de un Producto existente|
|DELETE|/Registros/habitaciones/:id|Elimina un Registro de una Habitación por su ID|
|DELETE|/Registros/productos/:id|Elimina un Registro de un Producto por su ID|


### Reservas
| verbo |  endpoint  |descripcion|
|-------|------------|-----------|
|  GET  |/reservas/habitaciones/:id|Recupera una Reserva de Habitación por su ID|
|  GET  |/reservas/habitaciones|Recupera el total de Reservas de Habitaciones existentes|
|  GET  |/reservas/habitaciones/vencidos|Recupera el total de Reservas de Habitaciones vencidas existentes|
|  GET  |/reservas/productos/:id|Recupera una Reserva de un Producto por su ID|
|  GET  |/reservas/productos|Recupera el total de Reservas de Productos existentes|
|  GET  |/reservas/productos/vencidos|Recupera el total de Reservas de Productos vencidas existentes|
| POST  |/reservas/habitaciones/:num |Crea una nueva Reserva de Habitación para el número especificado|
| POST  |/reservas/productos/:id |Crea una nueva Reserva de un Producto|
| PUT  |/reservas/habitaciones/:id |Realiza  modificaciones en una Reserva de una habitación|
| PUT  |/reservas/productos/:id |Realiza modificaciones en una Reserva de un Producto existente|
|DELETE|/reservas/habitaciones/:id|Elimina una Reserva de una Habitación por su ID|
|DELETE|/reservas/productos/:id|Elimina una Reserva de un Producto por su ID|



## cURL para

{
	"info": {
		"_postman_id": "ceff7a85-fb90-4d7f-bee8-618a90f1d5b9",
		"name": "Hoteles",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "36126957"
	},
	"item": [
		{
			"name": "Clientes",
			"item": [
				{
					"name": "ListarClientes",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3001/clientes",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"clientes"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarClientesPorDNI",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"dni\": 123578,\r\n        \"nombre\": \"Julia\",\r\n        \"apellido\": \"Avalos\",\r\n        \"fechaNacimiento\": \"1971-10-20\",\r\n        \"email\": \"leo@yahoo.com\",\r\n        \"tarjeta\": 123\r\n        \r\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/clientes/123",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"clientes",
								"123"
							]
						}
					},
					"response": []
				},
				{
					"name": "CrearCliente",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"dni\": 123578,\r\n        \"nombre\": \"Julia\",\r\n        \"apellido\": \"Avalos\",\r\n        \"fechaNacimiento\": \"1971-10-20\",\r\n        \"email\": \"leo@yahoo.com\",\r\n        \"tarjeta\": 123\r\n        \r\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/clientes/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"clientes",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarCliente",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "localhost:3001/clientes/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"clientes",
								""
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Productos",
			"item": [
				{
					"name": "ListarProductos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3001/productos",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"productos"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarProductosByID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3001/productos/28",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"productos",
								"28"
							]
						}
					},
					"response": []
				},
				{
					"name": "CrearProductos",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "localhost:3001/productos",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"productos"
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarProductos",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"Producto\": \"\",\r\n        \"Precio\": 10000000000,\r\n        \"Habilitado\": true\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/productos/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"productos",
								""
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Habitaciones",
			"item": [
				{
					"name": "ListarHabitaciones",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3001/Habitaciones",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Habitaciones"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarHabitacionesPorNumero",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3001/Habitaciones/3",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Habitaciones",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "CrearHabitaciones",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"numero\": 3,\r\n    \"Estrellas\": 2,\r\n    \"CantPersonas\": 4,\r\n    \"Precio\": 15000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Habitaciones/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Habitaciones",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarHabitaciones",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "localhost:3001/Habitaciones/25",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Habitaciones",
								"25"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Reservas",
			"item": [
				{
					"name": "ListarReservasHabitaciones",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Habitaciones",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Habitaciones"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarReservasProductos",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Productos",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Productos"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarReservasHabitacionesByID",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/habitaciones/13",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"habitaciones",
								"13"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarReservasHabitacionesVencidas",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/habitaciones/vencidas",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"habitaciones",
								"vencidas"
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarReservasHabitacionesByID",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/habitaciones/45",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"habitaciones",
								"45"
							]
						}
					},
					"response": []
				},
				{
					"name": "ModificarReservasHabitacionesByID",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/habitaciones/46",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"habitaciones",
								"46"
							]
						}
					},
					"response": []
				},
				{
					"name": "CrearReservasHabitaciones",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Habitaciones/8",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Habitaciones",
								"8"
							]
						}
					},
					"response": []
				},
				{
					"name": "CrearReservasProductos",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Productos/5",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Productos",
								"5"
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarReservasProductos",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Productos/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Productos",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "ModificarReservasProductos",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Productos/11",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Productos",
								"11"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarReservasProductosByID",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Reservas/Productos/17",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Reservas",
								"Productos",
								"17"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Registros",
			"item": [
				{
					"name": "CheckInRegistrosHabitacionesByID",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/checkin/488",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								"checkin",
								"488"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarRegistrosHabitaciones",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarRegistrosHabitacionesByID",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/21",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								"21"
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarRegistrosHabitacionesByID",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "CheckOutRegistrosHabitacionesByID",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/checkout/99",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								"checkout",
								"99"
							]
						}
					},
					"response": []
				},
				{
					"name": "BorrarRegistrosProductosByID",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/productos/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"productos",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "ModificarRegistrosProductosByID",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/productos/5",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"productos",
								"5"
							]
						}
					},
					"response": []
				},
				{
					"name": "ModificarRegistrosHabitacionesByID",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 30,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"FechaReserva\": \"2024-02-29\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarRegistrosProductos",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"dni\":999999,\r\n        \"CantPersonas\": 5,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 7,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"FechaReserva\": \"2024-02-29\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/productos/",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"productos",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarRegistrosProductosVencidos",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"dni\":999999,\r\n        \"CantPersonas\": 5,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 7,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"FechaReserva\": \"2024-02-29\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/productos/vencidos",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"productos",
								"vencidos"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarRegistrosHabitacionesVencidos",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"dni\":999999,\r\n        \"CantPersonas\": 5,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 7,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"FechaReserva\": \"2024-02-29\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/habitaciones/vencidos",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"habitaciones",
								"vencidos"
							]
						}
					},
					"response": []
				},
				{
					"name": "CheckInRegistrosProductosByID",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/Productos/checkin/14",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"Productos",
								"checkin",
								"14"
							]
						}
					},
					"response": []
				},
				{
					"name": "ListarRegistrosProductosByID",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"CantPersonas\": 3,\r\n        \"FechaIngreso\": \"2024-05-17\",\r\n        \"CantDias\": 10,\r\n        \"FechaEgreso\": \"2024-05-25\",\r\n        \"Precio\": 200000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3001/Registros/Productos/7",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"Registros",
								"Productos",
								"7"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}


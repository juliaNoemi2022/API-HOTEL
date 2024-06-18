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
| POST  |Registros/habitaciones/checkin/:id |Realiza el check-in de una Habitación|
| POST  |Registros/productos/checkin/:id |Realiza el check-in de un Producto|
| PUT  |Registros/habitaciones/checkout/:id |Realiza el check-out de una habitación|
| PUT  |Registros/habitaciones/:id |Realiza modificaciones de una Habitación existente|
| PUT  |Registros/productos/:id |Realiza modificaciones de un Producto existente|
|DELETE|/habitaciones/:id|Elimina una Habitación por su número|


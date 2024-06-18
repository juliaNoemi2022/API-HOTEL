# API REST DE HOTEL
 Esta aplicación permite gestionar los clientes, habitaciones, productos y reservas de una empresa hotelera.

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

## Para lanzar la aplicación
* Ejecutar el comando **npm install**

## Ejecutar la aplicación en modo desarrollo
* Ejecutar el comando **npm run dev**

 ## Si ya se tiene Docker y dbeaver

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
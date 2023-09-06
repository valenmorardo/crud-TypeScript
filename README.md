# API RESTful - CRUD Videogames

Esta aplicacion es, basicamente, un CRUD donde cada usuario se registra con email, contraseña y nombre. Una vez logeado se autentica y puede acceder a su perfil y poder crear, ver, eliminar y editar sus propios videojuegos.

Hice esta api para practicar typescript y ciertas cosas como encriptar datos y JWT.


A continuacion los pasos para poder probar esta API:

1. Una vez que tengas acceso al repositorio en tu PC, ejecutar npm install para tener acceso a todas las dependencias y librerias.
2. Antes que probar el codigo, crear un archivo .env y llenar los datos requeridos (en el .env.example estan indicado las variables necesarias).
Utilice sequelize y postgres. Si desea utilizar otra, tendra que realizar los cambios necesarios.
3. Luego de eso, puee testear la API con TypeScript mediante el comando npm run dev. O puede compilar el codigo JS mediante npm run build y luego ejecutar npm start para testear, va a ser indiferente.

# Endpoints:
*Metodo GET* ---> **localhost:3001/api** ---> Main route, ruta principal.


*Metodo POST* ---> **localhost:3001/api/register** ---> Ruta donde se puede registrar el usuario. Debe pasarle mediante el body los siguients datos:
* *name*
* *email*
* *password*

Respetar las lowercase y uppercase cuando sea necesario.


*Metodo POST* ---> **localhost:3001/api/login** ---> Ruta donde el usuario se logea y recibe el un token de autenticacion para tener acceso a las demas rutas.
Debe pasarle mediante el body los siguientes datos:
* *email*
* *password*

Respetar las lowercase y uppercase cuando sea necesario.



## User Profile
*Metodo GET* ---> **localhost:3001/api/profile** ---> Ruta donde se accede a los datos del usuario que se encuentre logeado.

*Metodo POST* ---> **localhost:3001/api/profile/postNewGame** ---> Ruta para crear un videojuego en nombre del usuario que se encuentre logeado.
Debe pasarle mediante el body los siguientes datos:
* *name*
* *description*
* *price*
* *genres*

Respetar las lowercase y uppercase cuando sea necesario.

*Metodo GET* ---> **localhost:3001/api/profile/myGames** ---> Ruta donde se accede a todos los videojuegos creados por el usuario.

*Metodo DELETE* ---> **localhost:3001/api/profile/myGames/deleteAGame/:id** ---> Ruta donde se elimina un videojuego deseado, pasandole la ID del videojuego.
Debe pasarle mediante params los siguientes datos:
* *id del videojuego*

*Metodo PUT* ---> **localhost:3001/api/profile/myGames/updateAGame/:id** ---> Ruta donde se actualizan datos de un videojuego deseado, pasandole la ID del videojuego.
Debe pasarle mediante params los siguientes datos:
* *id del videojuego*

## Admin

**localhost:3001/api/admin/** ---> A las rutas /admin solo tienen acceso aquellos usuarios quienes son admins. Cuando un admin se registra, hay un campo en la base de datos que dice si es admin o no. Por defecto siempre va a ser falso.
Para tener al menos 1 admin tendra q editarlo desde la base de datos para testear las siguientes rutas.

*Metodo GET* ---> **localhost:3001/api/admin/getAllProfiles** ---> Ruta donde los administradores pueden visualizar todos los usuarios registrados.

*Metodo DELETE* ---> **localhost:3001/api/admin/deleteProfile/:id** ---> Ruta donde los administradores pueden eliminar a un usuario (ID).
Debe pasarle mediante params los siguientes datos:
* *id del usuario*

*Metodo PUT* ---> **localhost:3001/api/admin/handlerIsAdmin/:id** ---> Ruta donde los administradores pueden actualizar si cierto usuario (ID) es admin o no.
Debe pasarle mediante params los siguientes datos:
* *id del usuario*
Debe pasarle mediante body los siguientes datos:
* *isAdmin* --> booleano

Respetar las lowercase y uppercase cuando sea necesario.



La API tambien esta deployada correctamente en: https://videogamestscrud.onrender.com/api
Funciona con las mismas rutas, obviamente. 
Recomiendo testearla de forma local para poder tener acceso a la base de datos y poder testear la ruta /admin



Eso es todo. Si llegaste aca gracias por estar interesado y espero que te sea util!
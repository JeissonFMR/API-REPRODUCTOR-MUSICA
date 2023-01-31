# API TIPO SPOTIFY

NodeJs +  (MongoDB)Mongoose

# INSTALACIÓN
<h2>Descargue o clone el repositorio en su computadora y haga uso del administrador de paquetes npm para instalar.</h2>

`npm install`

<h3>Luego de clonar tu repositorio e instalar las librerías necesarias configura tus variables de entorno en un archivo <strong>.env</strong>, el archivo de ejemplo esta con nombre <strong>.env.example.</strong></h3>

# ENDPOINTS:
# 🚀🚀 **AUTENTICACIÓN** 🚀🚀
## **REGISTRO**

🚀 **POST**
`http://localhost:PORT/api/auth/register`

🚀 **EJEMPLO PARA EL REGISTRO**
`{
    "name":"",
    "age":22,
    "email":"",
    "password":""
}`

## **LOGIN**

🚀 **POST**
`http://localhost:PORT/api/auth/login`

Para el inicio de sesión de utiliza email y password

## 🚀🚀 **SUBIDA DE CANCIÓN** 🚀🚀

🚀 **POST**

`http://localhost:PORT/api/storage`

Para subir una canción se necesita agregar la propiedad myfile en formdata del Body.

🚀 **GET**

`http://localhost:PORT/api/storage`

🚀 **DETALLE DE UNA CANCIÓN (GET)**

`http://localhost:PORT/api/storage/id`

🚀 **ELIMINAR UNA CANCIÓN (DELETE)**

`http://localhost:PORT/api/storage/id`


## 🚀🚀 **PISTA DE CANCIÓN** 🚀🚀

🚀 **POST**

`http://localhost:PORT/api/tracks/`

Para subir la pista de una canción se deja un ejemplo 👇👇.

`{
    "name":"",
    "album":"",
    "cover":"http://,
    "artist":{
        "name":"",
        "nickname":"",
        "nationality":"COL"
    },
    "duration":{
        "start":1,
        "end":0
    },
    "mediaId":"63abadf364530905cbb93963"
}`

🚀 **GET**

`http://localhost:PORT/api/tracks/`

🚀 **DETALLE DE UNA PISTA (GET)**

`http://localhost:PORT/api/tracks/id`

🚀 **ACTUALIZAR UNA PISTA (PUT)**

`http://localhost:PORT/api/tracks/id`

🚀 **ELIMINAR UNA PISTA (DELETE)**

`http://localhost:PORT/api/tracks/id`
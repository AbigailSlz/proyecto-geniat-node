# API REST NODE

El API soporta formato JSON.

## Instalación

``` npm install ```

## Documentación Postman

https://documenter.getpostman.com/view/15109281/2s93Y5PfFb


## URL
https://proyecto-geniat-node-production.up.railway.app/api/

## Recursos

### Login

|     Acción            |     Método    |     URL                                 |  
|-----------------------|---------------|-----------------------------------------|
|     Iniciar sesión    |     POST      |  https://proyecto-geniat-node-production.up.railway.app/api/auth/login    | 


|     Campo       |     Requerido    |     Valores permitidos    |     Descripción    |
|-----------------|------------------|---------------------------|--------------------|
|     correo      |     Sí           |     Correo electrónico    |     Correo         |
|     password    |     Sí           |                           |     Contraseña     |


### Usuarios

|     Acción               |     Método    |     URL                                    | 
|--------------------------|---------------|--------------------------------------------|
|     Registrar usuario    |     POST      |   https://proyecto-geniat-node-production.up.railway.app/api/usuarios    |  

|     Campo       |     Requerido    |     Valores permitidos                                                                                  |     Descripción                       |
|-----------------|------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------|
|     nombre      |     Sí           |     Solo letras y espacios                                                                              |     Nombre del usuario                |
|     apellido    |     Sí           |     Solo letras y espacios                                                                              |     Apellido del usuario              |
|     correo      |     Sí           |     Formato de correo electrónico                                                                       |     Correo electrónico del usuario    |
|     rol         |     Sí           |     Selecciona uno de los siguientes valores:     basico     medio    medioalto    altomedio    alto    |     Rol del usuario                   |


### Publicaciones

|    <br>Acción                    |    <br>Método    |    <br>URL                                                                                                                                                                                                  |
|----------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    <br>Registrar publicación     |    <br>POST      |    <br>https://proyecto-geniat-node-production.up.railway.app/api/publicaciones                                                                                                                                                             |
|    <br>Actualizar publicación    |    <br>PUT       |    <br>https://proyecto-geniat-node-production.up.railway.app/api/publicaciones/{id}<br>   <br>Especifique el id de la   publicación que desee actualizar.<br>   <br>Es necesario enviar todos   los campos para poder actualizar.<br>      |
|    <br>Eliminar publicación      |    <br>DELETE    |    <br>https://proyecto-geniat-node-production.up.railway.app/api/publicaciones/{id}<br><br>Especifique el id de la   publicación que desee eliminar. <br>Esta acción solo cambia el   estado de la publicación a “0” (Desactivado).<br>    |
|    <br>Listar publicaciones      |    <br>GET       |    <br>https://proyecto-geniat-node-production.up.railway.app/api/publicaciones                                                                                                                                                             |

|     Campo          |     Requerido    |     Valores permitidos        |     Descripción                      |
|--------------------|------------------|-------------------------------|--------------------------------------|
|     titulo         |     Sí           |     Solo letras y espacios    |     Título de la publicación         |
|     descripcion    |     Sí           |     Solo letras y espacios    |     Descripción de la publicación    |
# Poke-Choose-App

Una aplicación para elegir Pokémon, desarrollada con Next.js y utilizando módulos federados.

## Link
 orquest-app: https://poke-choose-app.vercel.app/
## Descripción

Poke-Choose-App es una aplicación web que te permite seleccionar y cambiar tu cardpokemon entre diferentes Pokémon de manera interactiva despues de hacer click en cambiar. Utiliza la arquitectura de módulos federados para cargar de forma dinámica los componentes remotos de cada Pokémon, lo que permite una experiencia de usuario rápida y eficiente.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **Module Federation**: Permite la integración de múltiples aplicaciones independientes en una sola aplicación web.
- **React**: Biblioteca JavaScript para construir interfaces de usuario.
- **TypeScript**: Lenguaje de programación para el desarrollo más robusto y escalable.

## Funcionalidades

- Selección de Pokémon interactiva.
- Cambio dinámico de Pokémon.
- Integración con PokeAPI para obtener información de cada Pokémon.

## Instalación

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/bdanielmr/poke-choose-app

2. Instala las dependencias necesarias.
   ```bash
   cd poke-choose-app
   npm run prepare
   
## Uso
-Para levantar de manera local antes debes crear el archivo para las variables de entorno
    
    variables de entorno
    nombre del archivo: env.development
    contenido del archivo:
                        NEXT_PUBLIC_ORQUEST_BASE_URL=http://localhost:3000
                        NEXT_PUBLIC_REMOTE_BASE_URL=http://localhost:3001
                        NEXT_PUBLIC_REMOTE_2_BASE_URL=http://localhost:3002
                        NEXT_PUBLIC_REMOTE_3_BASE_URL=http://localhost:3003

    
    1.- Crear un archivo .env.development en la raiz de cada modulo 
        -poke-choose-app
            -poke_host_orquest
                -src
                ...
                .env.development (nuevo archivo)
            -poke_remote_1
                -src
                ...
                .env.development (nuevo archivo)
            -poke_remote_2
                -src
                ...
                .env.development (nuevo archivo)
            -poke_remote_3
                -src
                ...
                .env.development (nuevo archivo)


    2.- Despues podras correr npm start dentro de la raiz 
        de poke-choose-app para levantar los modulos
        internos en poke-choose-app
    
       cd poke-choose-app
       npm start


## Test

1.- Dentro del modulo poke_host_orquest puedes encontrar test 

       
       cd poke-choose-app/poke_host_orquest
       npm run test

## Imagenes
![alt tag](https://i.ibb.co/9v8fGBH/Captura-de-pantalla-2024-04-18-a-la-s-3-05-00-p-m.png)
## Creditos

Basado en Next.js
Utiliza PokeAPI para obtener datos de Pokémon


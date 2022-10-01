# Dependencias instaladas

- express:
    Framework de Node.js que se utiliza para desarrollar aplicaciones web y APIs.

- dotenv:
    Paquete npm que carga automáticamente variables de entorno desde un archivo .env.

- nodemon:
    Herramienta que permite el reinicio automático de la aplicación de nodo cuando se detectan cambios en algún archivo del directorio.

- typescript:
    Lenguaje de programación.

- concurrently:
    Herramienta que permite ejecutar más de una tarea a la vez en el programa.

- webpack:
    Paquete de módulos estáticos para aplicaciones JavaScript, convirtiendo módulos en activos estáticos.

- eslint:
    Herramienta que analiza el código fuente e identifica posibles problemas y errores de programación.

- jest:
    Marco de pruebas unitarias.

- serve:
    Servir un sitio estático.



# Scripts NPM

- "build": "npx tsc"
    npm run build
    *Crea un directorio de compilación en carpeta dist.

- "start": "node dist/index.js":
    npm run start
    *Levantar proyecto en local

- "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"":
    npm run dev
    *Levantar el proyecto y que se actualice automáticamente frente a cambios en el código fuente

- "test": "jest":
    npm run test
    *Ejecutar test

- "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve":
    npm run serve:coverage
    *Visualizar informe de cobertura de test



# Variables de entorno .env

- PORT=8000
# Colmena Front Project
Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instalacion
Para instalar dependencias, ejecute:

```
npm install
```

## Iniciando la aplicación Next.js
Este comando iniciará la aplicación Next.js en modo de desarrollo.

```
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.


## Construir la App
Crea la aplicación para producción en la carpeta **.next**.

```
npm run build
```

## Iniciar la construccion
Inicie los archivos de producción localmente.

```
npm run start
```

## Linting
Lintea el proyecto usando **eslint**.

```
npm run lint
```

## Pruebas unitarias
Inicia la prueba usando **@testing-library/react**.

```
npm run test
```

## Creación y ejecución de imágenes de Docker
Este comando ejecutará un **contenedor Docker usando el archivo docker-compose.yml**.

```
npm run docker:run
```

Este comando utilizará **Docker Compose para iniciar todos los contenedores** definidos en el archivo docker-compose.yml en segundo plano (modo independiente). Ejecuta el script docker:run seguido del comando up -d.

```
npm run docker:up
```

Este comando **construirá una imagen de Docker** utilizando el archivo Dockerfile. Similar a docker:run, también utiliza el archivo de variables de entorno .env.

```
npm run docker:build
```

Este comando **iniciará una sesión de terminal interactiva** dentro de un contenedor en ejecución. Ejecuta el comando docker:run exec -ti --.

```
npm run docker:command
```

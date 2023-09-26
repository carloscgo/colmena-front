# Colmena Front Project
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Installation
To install dependencies, run:

```
npm install
```

## Starting the Next.js App
This command will start the Next.js app in development mode.

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Build App
Builds the app for production to the **.next** folder.

```
npm run build
```

## Start build
Start your production build locally.

```
npm run start
```

## Linting
Lints the project using **eslint**.

```
npm run lint
```

## Unit test
Launches the test using **@testing-library/react**.

```
npm run test
```

## Building and Running Docker Images
This command will run a **Docker container using the docker-compose.yml** file.

```
npm run docker:run
```

This command will use **Docker Compose to start all containers** defined in the docker-compose.yml file in the background (detached mode). It runs the docker:run script followed by the command up -d.

```
npm run docker:up
```

This command will **build a Docker image** using the Dockerfile file. Similar to docker:run, it also uses the .env environment variables file.

```
npm run docker:build
```

This command will **launch an interactive terminal** session within a running container. It runs the docker:run exec -ti -- command.

```
npm run docker:command
```

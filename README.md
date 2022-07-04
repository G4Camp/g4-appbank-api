# API ModaVest

## Descrição

Repositório para API Rest ModaVest desenvolvido com Nest.js

## Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- [NestJS](https://nestjs.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Rodar a aplicação em modo de desenvolvimento

### 1. Requisitos

- Instalar NodeJS
- Instalar CLI do NestJS

### 2. Inicie aplicação em modo dev

Crie o arquivo com as variáveis de ambiente

```
touch .env.example .env
```

Defina as variáveis em .env e inicie a aplicação utilizando:


```
npm run start:dev
```


## Rodar a aplicação em modo de desenvolvimento com o Docker

### 1. Requisitos

- Instalar o Docker
- Instalar Docker Compose

### 2. Inicie aplicação em modo dev

Crie o arquivo com as variáveis de ambiente

```
touch .env.example .env
```

> Nota: o nome da base de dados padrão, bem como o usuário e senha para acesso estão em docker-compose.yaml

Defina as variáveis em .env e inicie a aplicação utilizando:

```
docker-compose up
```# g4-appbank-api

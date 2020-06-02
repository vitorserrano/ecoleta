<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/logo.png">
    <br><br>
    <b>Recicle! ajude o meio ambiente!</b> 
</h3>

# Índice

- [Database](#database)
- [Back-end](#back-end)
- [Front-end](#tecnologias-utilizadas)
- [Mobile](#como-usar)

<a id="database"></a>

# 📄 Database

Na aplicação vamos utilizar o **SQLite3** para nosso banco de dados, pois além de ser **MySQL** ele não precisa de nenhum ambiente de configuração na máquina para rodar.

## Dependências

- sqlite3
- knex

### SQLite3

- Primeiro precisamos instalar o pacote do **SQLite3** na nossa aplicação:

```sh
  $ npm install sqlite3
```

### Knex

- O **Knex** é um query builder que nos permite escrever comandos **SQL** com a sintaxe do **JavaScript**. Iremos utiliza-lo para manusear o banco de dados da aplicação.

1. Primeiro, vamos instalar o knex:

```sh
  $ npm install knex
```

2. Em seguida, podemos configurar um script para executar as migrations de forma mais fácil. Para isso, dentro do arquivo `package.json` adicione este comando:

```json
  "scripts": {
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
  },
```

- Para executar as migrations utilize o comando: `npm run knex:migrate`

3. Por fim, vamos configurar um script para excutar as seeds do banco de dados logo abaixo do `knex:migrate` dentro do `package.json`:

```json
  "scripts": {
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:seed": "knex --knexfile knexfile.ts seed:run"
  },
```

- Para executar as seeds basta executar este comando: `npm run knex:seed`

<a id="back-end"></a>

# 📃 Back-end

Para iniciarmos com o desenvolvimento do <strong>Back-end</strong> da nossa aplicação, vamos precisar configurar e instalar alguns pacotes para o </strong>Node.js</strong> rodar junto ao <strong>TypeScript</strong>.

## Dependências

- typescript
- express / @types/express
- ts-node
- ts-node-dev
- cors / @types/cors

### Configuração Inicial

- Para iniciar qualquer projeto com <strong>Node.js</strong> você precisar criar o arquivo de configuração inicial `package.json`. Para isso, basta executar:

```sh
  $ npm init -y
```

### TypeScript

- Para utilizar **TypeScript** em qualquer projeto precisamos instalar a sua própria dependência.

```sh
  $ npm install typescript
```

- Após a intalação do pacote podemos criar as configurações padrões para a utilização do typescript com o comando:

```sh
  $ npx typescript --init
```

### Express

- O express será o responsável pelo roteamento do nosso servidor. Precisamos instalr o pacote padrão do express e também o @types, para utilizarmos com o TypeScript.

```sh
  # Instação do express
  $ npm install express

  # instalação do express com tipagem para TypeScript
  $ npm install @types/express -D

```

### ts-node

- O **ts-node** serve para compilarmos através do **Node** arquivos **TypeScript**, pois o por padrão o **Node** executa somente **JavaScript**. Para isso, vamos instalar da seguinte forma:

```sh
  $ npm install ts-node -D
```

### ts-node-dev

- O pacote **ts-node-dev** faz o monitoramento da pasta configurada, assim não precisamos executar `npx ts-node-dev src/server.ts` todas as vezes que fizermos alguma alteração no código.

```sh
  $ npm install ts-node-dev -D
```

- Após instalar a dependência, vamos configurar o script para executar o arquivo do nosso servidor. Dentro de `package.json` vamos adicionar a seguinte linha de comando:

```json
  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
```

- Por fim, podemos executar o servidor dessa maneira: `npm run dev`. Dessa forma, sempre que houver alguma alteração do código, o **ts-node-dev** irá fazer a reinicialização automática.

### CORS

- O express será o responsável por permitir que outras urls acessem nossa API. Precisamos instalr o pacote padrão do cors e também o @types, para utilizarmos com o TypeScript.

```sh
  # Instação do express
  $ npm install cors

  # instalação do express com tipagem para TypeScript
  $ npm install @types/cors -D

```

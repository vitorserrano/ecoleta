<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/logo.png">
    <br><br>
    <b>Recicle! ajude o meio ambiente!</b> 
</h3>

# Índice

- [Back-end](#back-end)
- [Front-end](#tecnologias-utilizadas)
- [Mobile](#como-usar)

<a id="back-end"></a>

# 📃 Back-end

Para iniciarmos com o desenvolvimento do <strong>Back-end</strong> da nossa aplicação, vamos precisar configurar e instalar alguns pacotes para o </strong>Node.js</strong> rodar junto ao <strong>TypeScript</strong>.

## Pacotes

- typescript
- express
- @types/express
- ts-node
= ts-node-dev

### Configuração Inicial

- Para iniciar qualquer projeto com <strong>Node.js</strong> você precisar criar o arquivo de configuração inicial `package.json`. Para isso, basta executar:

```sh
  $ npm init -y
```

### TypeScript

- Para utilizar **TypeScript** em qualquer projeto, precisamos instalar a sua própria dependência.

```sh
  $ npm install typescript
```

- Após a intalação do pacote, podemos criar as configurações padrões para a utilização do typescript com o comando:

```sh
  $ npx typescript --init
```

### Express

- O express será o responsável pelo roteamento do nosso servidor.

```sh
  $ npm install express
```

### @types/express

- Como a nossa aplicação irá utilizar **TypeScript** vamos precisar instalar o pacote de "tipagem" para o express. Pode-se notar que é passado `-D` pois será uma dependência apenas para o ambiente de desenvolvimento.

```sh
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

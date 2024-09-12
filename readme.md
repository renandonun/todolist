# Todo List API

## Descrição

Esta é uma API RESTful simples construída com Node.js, Express.js e MongoDB Atlas para gerenciar tarefas. Ela permite aos usuários criar, ler, atualizar e excluir tarefas.

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript para o lado do servidor.
* **Express.js:** Framework web minimalista para Node.js.
* **MongoDB Atlas:** Serviço de banco de dados NoSQL hospedado na nuvem.
* **Mongoose:** ORM (Object-Relational Mapper) para MongoDB e Node.js.

## Pré-requisitos

* Node.js e npm (ou yarn) instalados.
* Uma conta no MongoDB Atlas e um cluster criado.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/renandonun/todolist
   ```

2. **Instale as dependências:**

   ```bash
   cd todolist
   ```

   ```bash
   npm install
   ```

## Configuração

    Crie um arquivo .env e preencha as variáveis de ambiente no arquivo com as suas credenciais do MongoDB Atlas.

## Rodando a aplicação

    ```bash
    npm start
    ```

## Endpoints da API

    GET /tasks: Retorna uma lista de todas as tarefas.
    POST /tasks: Cria uma nova tarefa.
    GET /tasks/:id: Retorna uma tarefa específica pelo ID.
    PUT /tasks/:id: Atualiza uma tarefa específica pelo ID.
    DELETE /tasks/:id: Exclui uma tarefa específica pelo ID.

## Contribuições

    Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request.

## Licença

    Este projeto está licenciado sob a licença ISC.

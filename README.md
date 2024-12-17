# Full Cycle Rocks!
Este projeto é composto por uma aplicação Nginx que serve como proxy para uma aplicação Node.js, acessível pelo endpoint `localhost:8080`.

A aplicação Node.js conecta-se a um banco de dados MySQL, insere um novo nome na tabela `people` a cada requisição e exibe todos os registros na página inicial. Um volume é utilizado para persistir os dados no MySQL, garantindo que os registros não sejam perdidos entre reinicializações.

Executando o projeto
Para iniciar o projeto, basta executar o comando:
```
docker-compose up -d
```
## Dependências
- db-migrate-mysql@^3.0.0
- db-migrate@^0.11.14
- ejs@^3.1.10
- express@^4.21.2
- mysql2@^3.11.5
- nodemon@^3.1.7

## Gerenciamento de migrações
Como o host do banco de dados é definido por uma variável de ambiente (`DB_HOST`), foi criado o utilitário `create.js`. Ele gera dinamicamente o arquivo de configuração `database.json` necessário para o db-migrate.

As migrações são executadas automaticamente no `entrypoint.sh`. Em um ambiente de produção, a execução das migrações poderia ser gerenciada de forma mais robusta usando Swarm ou Kubernetes.
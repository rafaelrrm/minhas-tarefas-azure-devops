# tcc-azure-devops
## Node Target Version: Node v14 LTS
## Operating System Target Version: Ubuntu 20.04 LTS

## Dependências globais para o ambiente local de desenvolvimento.
```
* npm i -g nodemon eslint-cli webpack webpack-cli

```

## (.env) - Credenciais do Azure (Application Settings)
-Para rodar localmente, crie um arquivo .env na raiz do projeto.
```
#AZURE_ENV PODE SER "LOCAL", "DEV" OU "PROD" PARA DEFINIR O AMBIENTE DO AZURE
AZURE_ENV="LOCAL"
#A PORTA SÓ DEVE SER DEFINIDA QUANDO ESTIVER RODANDO O PROJETO EM AMBIENTE LOCAL
PORT=""

#CREDENCIAIS DE BANCO DE DADOS
DB_SERVER=""
DB_DATABASE=""
DB_HOSTNAME=""
DB_USERNAME=""
DB_PASSWORD=""
DB_PORT=""
DB_ENV_SCHEMA=""
```
#!/bin/sh

echo "Executando criate.js..."
node criate.js

echo "Executando migrações..."
db-migrate up 

# sleep 60
echo "Iniciando a aplicação..."
node src/server.js

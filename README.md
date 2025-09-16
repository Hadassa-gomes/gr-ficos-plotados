ThingSpeak Data Visualization

Este projeto é um exemplo de consulta de dados de um canal ThingSpeak e geração de gráficos usando Chart.js no Node.js. Ele busca os feeds de sensores de um canal público, processa os dados e gera um gráfico de linha como imagem (PNG).

Funcionalidades

Consulta dados de um canal ThingSpeak via API.

Exibe informações do canal, como:

Nome da estação

Localização (latitude e longitude)

Sensores (field1 a field8)

Gera gráfico de linha para um sensor específico (field1) com base nos dados históricos.

Salva o gráfico como imagem (grafico.png).

Pré-requisitos

Node.js v18+

npm ou yarn

Instalação

Clone o repositório:

git clone <url-do-repositório>
cd <nome-do-repositório>


Instale as dependências:

npm install node-fetch chartjs-node-canvas


Caso esteja usando Node.js 18+, node-fetch é necessário apenas se você estiver usando import fetch from 'node-fetch';.

Estrutura do projeto
.
├── index.js           # Código principal
├── grafico.png        # Gráfico gerado
└── package.json

Uso

Abra o arquivo index.js e configure a URL do canal ThingSpeak caso necessário:

const response = await fetch('https://thingspeak.mathworks.com/channels/1293177/feed.json');


Execute o script:

node index.js


Saída no console:

🛰️ Estação: Nome da Estação
📍 Localização: latitude, longitude
📏 Sensores:
  field1: Temperatura
  field2: Umidade
  ...
✅ Gráfico salvo como grafico.png


O gráfico será salvo como grafico.png na pasta do projeto.



Para adicionar mais datasets, basta incluir novos objetos dentro de datasets no config.

Observações

Certifique-se de que o canal ThingSpeak está público ou que você possui a API key necessária.

O gráfico gerado é estático (PNG). Para gráficos interativos, considere usar bibliotecas web (Chart.js no browser ou Plotly).

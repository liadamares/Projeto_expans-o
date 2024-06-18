const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilitar o CORS para todas as origens
app.use(cors({
    origin: '*', // Permitir todas as origens
    methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization', 'application/json'],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200// Cabeçalhos permitidos
}));

app.use(express.static(path.join(__dirname, 'public/src')));

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, 
  
  () => { console.log(`Servidor rodando em http://localhost:${port}`);
});

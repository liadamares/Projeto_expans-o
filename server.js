const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'application/json'],
    credentials:true,         
    optionSuccessStatus:200
}));

app.use(express.static(path.join(__dirname, 'public/src')));

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, 
  
  () => { console.log(`Servidor rodando em http://localhost:${port}`);
});

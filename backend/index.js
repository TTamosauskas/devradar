const express = require('express');

const app = express();

// Método HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params:
// Route Params:
// Body:

app.post('/', (request, response) => {
return response.json({ message:'Hellosauskas GT' });
});

app.listen(3333);
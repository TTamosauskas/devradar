const express = require('express');

const app = express();

app.use(express.json());

// Método HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params: request.query (Filtros, ordenação, paginação, etc...)
// Route Params: request.params (identificar um recurso para alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de registro)

app.post('/users', (request, response) => {
    console.log(request.body);
});

// app.get('/users', (request, response) => {
//    return response.json({ message:'Hellosauskas GT' });
//});

//app.query('/users', (request, response) => {
//    console.log(request.params)
//});

// app.delete('/users/:id', (request, response) => {
// console.log(request.params)
//    return response.json({ message:'Hellosauskas GT' });
//});

app.listen(3333);
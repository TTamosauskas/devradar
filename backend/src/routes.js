const { Router } =  require ('express');
const axios = require('axios');
const routes = Router();

// Método HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params: request.query (Filtros, ordenação, paginação, etc...)
// Route Params: request.params (identificar um recurso para alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de registro)


routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(apiResponse.data);

    return response.json({ message: 'Hello OmniStack' });
});

module.exports = routes;

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


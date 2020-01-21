const { Router } =  require ('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController');
const routes = Router();

// Método HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params: request.query (Filtros, ordenação, paginação, etc...)
// Route Params: request.params (identificar um recurso para alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

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


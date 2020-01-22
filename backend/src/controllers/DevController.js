const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy (metodos do controller, chamados pelo routes)

module.exports = {

    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },
    
    async destroy(request, response){
        const {github_username} = request.params;
        
        const devDelete = await Dev.deleteOne({github_username})    
        if(devDelete.deletedCount === 0){
        return response.json({ message: 'Esse usuario não existe' })
        }
        return response.json(devDelete);
     
    },
    
    async store(request, response) {
    
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            console.log(apiResponse.data);
        
            const { name, login, avatar_url, bio } = apiResponse.data;
        
            const nameOrLogin = name  === null ? login : name;
            
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            const dev = await Dev.create({
                github_username,
                name: nameOrLogin,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        
        }
    
        return response.json(dev);
},

async update(request, response) {
    
    const {github_username} = request.params;

    const {name, techs, bio, latitude, longitude } = request.body;
    
    const techsArray = parseStringAsArray(techs);

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }
    
    let dev = await Dev.findOne({ github_username });

    if(!dev){
        return response.json({ message: 'Esse usuario não existe' })
    }

    const devUpdate = await Dev.updateOne(dev, {
        github_username,
        bio,
        techs: techsArray,
        location,
    })

   return response.json(devUpdate);

}
  

};
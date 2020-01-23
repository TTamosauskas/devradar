// import React, {useState} from 'react'; 
import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() { 

    const [github_username, setGithubUsername] = useState('');    
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            const {latitude, longitude} = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
        },
        (err) => {
            console.log(err);
        },
        {
            timeout:30000,
        }
    )
}, []);
    
async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
        github_username,
        techs,
        latitude,
        longitude,
    } )
    console.log(response.data);
};

    return(

    <div id="app">
    <aside>
        <strong >Cadastrar</strong>
        <form onSubmit={handleAddDev}>

            <div className="input-block">
            <label htmlFor="github_username">Usuário do GitbHub</label>
            <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}

            />
            </div>
            <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)} />
            </div>
            <div className="input-block">
            <div className="input-group">
            
            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)} />
            </div>

             <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}/>
            </div>

            </div>

            <button type="submit">Salvar</button>
            
                </div>

        </form>

    </aside>
    <main>
        <ul>
        <li className="dev-item">  
                <header>
                    <img 
                        src="https://avatars3.githubusercontent.com/u/2254731?s=460&v=460"
                        alt="Leonardo "/>
                        <div className="user-info">
                            <strong>Leonardo de Almeida</strong>
                            <span>React, react Native, Node.js</span>
                        </div>
                </header>
                <p>lero lero lero leorl Leonardo</p>
                <a href="https://avatars3.githubusercontent.com/u/2254731?s=460&v=460">Acessar Perfil no github</a>
        </li>

        <li className="dev-item">  
                <header>
                    <img 
                        src="https://avatars3.githubusercontent.com/u/2254731?s=460&v=460"
                        alt="Leonardo "/>
                        <div className="user-info">
                            <strong>Leonardo de Almeida</strong>
                            <span>React, react Native, Node.js</span>
                        </div>
                </header>
                <p>lero lero lero leorl Leonardo</p>
                <a href="https://avatars3.githubusercontent.com/u/2254731?s=460&v=460">Acessar Perfil no github</a>
        </li>


        <li className="dev-item">  
                <header>
                    <img 
                        src="https://avatars3.githubusercontent.com/u/2254731?s=460&v=460"
                        alt="Leonardo "/>
                        <div className="user-info">
                            <strong>Leonardo de Almeida</strong>
                            <span>React, react Native, Node.js</span>
                        </div>
                </header>
                <p>lero lero lero leorl Leonardo</p>
                <a href="https://avatars3.githubusercontent.com/u/2254731?s=460&v=460">Acessar Perfil no github</a>
        </li>

        </ul>
    </main>
    </div>

    )

    }

export default App;



//import Header from './Header';

// Componente - Trechos de codigo que pode ser isolado ou repetido
// Propriedade - Atributos e informações que um componeten PAU passa para um componente FILHO
// Estado - Informação mnantida pelo componente (imutabilidade)

 // function App(){
//
//
//const [counter, setCounter] = useState(0);
//
//function IncrementCounter() {
//     setCounter(counter + 1);
//}
//
//return(
//    <>
//    <h1>Contador {counter}</h1>
//    <button onClick={IncrementCounter}>Incrementar</button>
//    </>
//);

//}



// App é um componente e title uma propriedade
// function App(){ 
//    return (
// <>
// <Header title="Dashboard"/> 
// <Header title="Oi oi i"/>
//   <Header title="Xavier"/>
//  </>
//  );
//}


// import React, {useState} from 'react'; 
import React, { useEffect } from 'react'; 

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() { 
useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            console.log(position);
        },
        (err) => {
            console.log(err);
        },
        {
            timeout:30000,
        }
    )
}, []);
    

    return(

    <div id="app">
    <aside>
        <strong >Cadastrar</strong>
        <form>

            <div className="input-block">
            <label htmlFor="github_username">Usuário do GitbHub</label>
            <input name="github_username" id="github_username" required />
            </div>
            <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
            </div>
            <div className="input-block">
            <div className="input-group">
            
            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
            </div>

             <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
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


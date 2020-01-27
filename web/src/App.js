// import React, {useState} from 'react'; 
import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() { 

    const [devs, setDevs] = useState([]);
  

useEffect(() =>{
  async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
  }
  loadDevs();
}, []);
    
async function handleAddDev(data) {

    const response = await api.post('/devs', data)
  

    setDevs([...devs, response.data]);
};

    return(

    <div id="app">
    <aside>
        
    <strong >Cadastrar</strong>
       <DevForm onSubmit={handleAddDev}/>
    </aside>
    <main>
        <ul>
            {devs.map(dev =>(
            <DevItem key={dev._id} dev={dev} />
            ))}
      
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


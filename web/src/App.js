import React, {useState} from 'react'; 
//import Header from './Header';

// Componente - Trechos de codigo que pode ser isolado ou repetido
// Propriedade - Atributos e informações que um componeten PAU passa para um componente FILHO
// Estado - Informação mnantida pelo componente (imutabilidade)

function App(){

const [counter, setCounter] = useState(0);

function IncrementCounter() {
     setCounter(counter + 1);
}

return(
    <>
    <h1>Contador {counter}</h1>
    <button onClick={IncrementCounter}>Incrementar</button>
    </>
);

}



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


export default App;
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Lista from './Components/Lista';
import Libros from './Components/Libros';
import LibreriaProvider from './Context/LibreriaContext';

function App(){
 
    return (
      <div className="App">
        <LibreriaProvider>
          <Header/>
          <div className="Containers">
              <Libros/>
              <Lista/>            
          </div> 
        </LibreriaProvider>
      </div>
    )
  
}

export default App;

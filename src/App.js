import './App.css';

import { Suspense, useState } from 'react';

import Languages from './components/Languages.js';
import Legal from './components/Legal.js';
import Menu from './components/Menu.js';
import Phrases from './components/Phrases.js';

function App() {
  const [theme, setTheme] = useState ("light"); 

  return (
    <Suspense fcallback="Cargando Traducciones ...">
      <div className={"App " + theme}>
        

        <Languages></Languages>  
        <Menu></Menu>
        <Phrases setTheme ={setTheme}></Phrases>   
        <Legal></Legal>   
    
      </div>

    </Suspense>
  );
}

export default App;

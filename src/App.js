import './App.css';
import Languages from './components/Languages.js';
import Phrases from './components/Phrases-container.js';
import Legal from './components/Legal.js';
import Menu from './components/Menu.js';


function App() {
  return (
    <div className="App">
      

        <Languages></Languages>  
        <Menu></Menu>
        <Phrases></Phrases>   
        <Legal></Legal>   
     
    </div>
  );
}

export default App;

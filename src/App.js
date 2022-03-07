import logo from './logo.svg';
import './App.css';
import PersonCardDos from './components/PersonCardDos';

function App() {
  return (
    <div className="App">
       <PersonCardDos firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
       <PersonCardDos firstName="Charles" lastName="Darwin" age={40} hairColor={"black"}/> 
       <PersonCardDos firstName="Eliodoro" lastName="Yañez" age={25} hairColor={"white"}/> 
       <PersonCardDos firstName="Eugenio" lastName="Gonzales" age={100} hairColor={"Yellow"}/> 
    </div>
  );
}

export default App;

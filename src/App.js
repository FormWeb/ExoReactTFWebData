import logo from './logo.svg';
import './App.css';
import Bienvenue from './components/bienvenue/bienvenue';

function App() {
  return (
    <div className="App">
      <h1>Exo 01</h1>
      <Bienvenue name="Sylvain" age={45}/>
    </div>
  );
}

export default App;

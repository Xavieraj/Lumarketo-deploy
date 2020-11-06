import './App.css';
import fondoImage from './img/fondo.jpg';

function App() {
  return (
    <div className="App">
     
     <h1>Hola Lumarketo</h1>
     <h2>De: Alfonso Mosquera</h2>
     <img src={fondoImage}  alt="fondo-image" className="App-fondo" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {hotjar} from 'react-hotjar';
import { useEffect } from 'react';

function App() {

  useEffect(() =>{
         hotjar.initialize(3284396, 6);
  },[])

  return (
    <div className="App">
      <h2>hello world</h2>
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
      <h2>Hello world</h2>
      <div>
        <input type="text"/>
      </div>
    </div>
  );
}

export default App;

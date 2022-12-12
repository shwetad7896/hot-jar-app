import './App.css';
import {hotjar} from 'react-hotjar';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'


function App() {

  useEffect(() =>{
         hotjar.initialize(3284396, 6);
  },[])
  const [btn1, setbtn1] = useState();
  // const navigate = useNavigate();
  const handleclick = (e) =>{
    const data = e.target.value;
    setbtn1(e.target.value);
    // navigate({
    //   pathName:'/header'
    // })
    console.log(data);
  }

  return (
    <div className="App">
      <h2>hello world</h2>
      <img src=''/>
      <button onClick={(e) => handleclick(e)}>submit</button>
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

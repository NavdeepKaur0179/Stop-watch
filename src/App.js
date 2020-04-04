import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';


class App extends Component {
  render()
  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is a simple Timer App built in react.js
        </p>
        </header>  
        <Timer start={Date.now()}/>    
    </div>
  );
}
}

export default App;

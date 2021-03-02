import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="">
          Edit <code className="jm-tips">src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

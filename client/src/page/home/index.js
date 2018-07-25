import React, { Component } from 'react';
import './sass/app.scss';
import png from '../../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="st">123123</p>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <img src={png} alt={'量张图'} style={{ width: 20 }} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

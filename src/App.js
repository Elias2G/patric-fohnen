import React, { Component } from 'react';
import './App.css';

import { Navigation } from './components/navigationComponents/Navigation';
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;

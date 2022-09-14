import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import Banner from './Components/Banner';
import Test from './Components/test';
import Features from './Components/Features';
import Video from './Components/Video';
import ProvidedTools from './Components/ProvidedTools';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <Features />
        <Video />
        <ProvidedTools />
      </>
    );
  }
}
export default App;
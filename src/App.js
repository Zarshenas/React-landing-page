import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import Banner from './Components/Banner';
import Features from './Components/Features';
import Video from './Components/Video';
import ProvidedTools from './Components/ProvidedTools';
import Interaction from './Components/Interaction';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <Features />
        <Video />
        <ProvidedTools />
        <Interaction />
      </>
    );
  }
}
export default App;
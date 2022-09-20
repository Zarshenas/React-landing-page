import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import Banner from './Components/Banner';
import Features from './Components/Features';
import Video from './Components/Video';
import ProvidedTools from './Components/ProvidedTools';
import Interaction from './Components/Interaction';
import PricingPlans from './Components/PricingPlans';
import Interpretations from './Components/Interpretations';
import BrandOne from './Components/BrandOne';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <Features />
        <React.StrictMode>
          <Video />
        </React.StrictMode>
        <ProvidedTools />
        <Interaction />
        <PricingPlans />
        <Interpretations />
        <BrandOne />
      </>
    );
  }
}
export default App;
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
import CompletedProjects from './Components/CompletedProjects';
import AppInterfaces from './Components/AppInterfaces';
import FAQ from './Components/Faq';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import ScrollToTop from './Components/scrollToTop';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ScrollToTop />
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
        <CompletedProjects />
        <AppInterfaces />
        <FAQ />
        <Subscribe />
        <Footer />
      </>
    );
  }
}
export default App;
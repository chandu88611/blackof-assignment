// src/App.js
import React from 'react';
import Header from './components/header';
import VerticalSlider from './components/VerticalSlider';
import HorizontalSlider from './components/HorizontalSlider';
import GetInTouch from './components/GetinTouch';
import FooterSection from './components/Footer';


function App() {
  return (
    <div >
      <Header />
      <VerticalSlider />
      <HorizontalSlider />
      <GetInTouch/>
      <FooterSection/>
      {/* Add more components as needed */}
    </div>
  );
}

export default App;

// src/App.js
import Header from './components/header';
import VerticalSlider from './components/VerticalSlider';
import HorizontalSlider from './components/HorizontalSlider';
import GetInTouch from './components/GetinTouch';
import Footer from "./components/Footer"


function App() {
  return (
    <div >
      <Header />
      <VerticalSlider />
      <HorizontalSlider />
      <GetInTouch/>
      <Footer/>
      {/* Add more components as needed */}
    </div>
  );
}

export default App;

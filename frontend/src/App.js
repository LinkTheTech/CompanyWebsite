import logo from './logo.svg';
import './App.css';
import Navbar from './Section/Navbar';
import Footer from './Section/Footer';
import Homepage from './Pages/Homepage';
import ActionAreaCard from './Component/ActionAreaCard';
import OurServices from './Section/OurServices';
import Carousel from './Section/Carousel';
import AccordionFAQ from './Section/AccordionFAQ';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Carousel/>
      <OurServices/>
     <AccordionFAQ/>
      <Footer/>
    </div>
  );
}

export default App;

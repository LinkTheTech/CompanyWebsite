import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import ActionAreaCard from './Component/ActionAreaCard';
import OurServices from './Section/OurServices';

function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <OurServices></OurServices>
    </div>
  );
}

export default App;

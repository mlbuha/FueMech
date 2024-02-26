import './App.css';
import Bottom from './Bottom';
import Fuel from './Componets/Fuel/Fuel';
import Home from './Componets/Home/Home';
import Mechanic from './Componets/Mechanic/Mechanic';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/fuel" element={<Fuel/>}></Route>
          <Route exact path="/mechanic" element={<Mechanic/>}></Route>
        </Routes>
        <Bottom />
      </Router>
    </>
  );
}

export default App;

{/* <Home/> */ }
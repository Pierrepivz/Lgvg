
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Shelves from "./Shelves.js";
import House_shelf from "./House_shelf.js";
import Nav from "./Nav.js";
import Products from "./Products.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        
        <Router>
          <Routes>
        <Route exact path="/" element={<Shelves />}/>
        <Route exact path="/house-shelf" element={<House_shelf />}/>
        <Route exact path="/products" element={<Products />}/>
        </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;

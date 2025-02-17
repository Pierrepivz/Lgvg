
import './App.css';
import Shelve from "./Shelve.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div class="shelves_container">
          <div class="row" id="text">
            <p>select a shelve and start diggin :</p>
            <p class="name_display" id="house_display">HOUSE</p><p class="name_display" id="techno_display">TECHNO</p><p class="name_display" id="acidjazz_display">ACID-JAZZ</p>
            <p class="name_display" id="hiphouse_display">HIP-HOUSE</p><p class="name_display" id="indierock_display">INDIE ROCK</p><p class="name_display" id="house2011_now_display">HOUSE 2011 NOW</p>
            <p class="name_display" id="italohouse_display">ITALO HOUSE</p>
            <p>or browse through catalogue</p>

          </div>
          <div class="row" id="selection">


          

          <Shelve />
          <Shelve />
          <Shelve />
          <Shelve />
          <Shelve />
          <Shelve />
          <Shelve />
          <Shelve />

          





         
          
          
          </div>
        </div>
        
          
      </header>
    </div>
  );
}

export default App;

import Shelve from "./Shelve.js";

export default function Shelves(){
    return (
        <div class="shelves_container">

          <div class="row" id="text">
            <p id="intro">"Enter the diggin portal .... your introduction phrase" </p>
            <p class="name_display" id="house_display">HOUSE</p><p class="name_display" id="techno_display">TECHNO</p><p class="name_display" id="acidjazz_display">ACID-JAZZ</p>
            <p class="name_display" id="hiphouse_display">HIP-HOUSE</p><p class="name_display" id="indierock_display">INDIE ROCK</p><p class="name_display" id="house2011_now_display">HOUSE 2011 NOW</p>
            <p class="name_display" id="italohouse_display">ITALO HOUSE</p>
            <button>Our distrubition (for record shops)</button>
          </div>
          <div class="description">
            <p class="name_display" id="house_description">progressive house description</p>
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
    );
}
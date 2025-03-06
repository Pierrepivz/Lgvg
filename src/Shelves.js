import Shelve from "./Shelve.js";
import Shelve2 from "./Shelve2.js";

export default function Shelves(){
    return (
        <div class="shelves_container">

          <div id="text">
            <p id="intro">"Enter the diggin portal .... your introduction phrase" </p>
            <p id="intro_mobile">"shorter intro for mobile" </p>
            <button class="distro">Our distribution (for record shops)</button>
          </div>
          <div class="shelve_presentation">
           
          <p class="name_display" id="house_display">HOUSE</p><p class="name_display" id="techno_display">TECHNO</p><p class="name_display" id="acidjazz_display">ACID-JAZZ</p>
            <p class="name_display" id="HIP-HOUSE_display">HIP-HOUSE</p><p class="name_display" id="indierock_display">INDIE ROCK</p><p class="name_display" id="house2011_now_display">HOUSE 2011 NOW</p>
            <p class="name_display" id="italohouse_display">ITALO HOUSE</p>
            <div class="description">
            
            <p class="name_display" id="HIP-HOUSE_display">hip house description</p>
            <p class="name_display" id="SPEENY_display">hip house description</p>
            <p class="name_display" id="HIP-HOP_display">hip house description</p>
            

          </div></div> 

          <div class="row" id="selection">


          
          <p>House, Techno, Trance...</p>
          <Shelve />
          <Shelve2 />
          <Shelve />
          <p>Electro, Downtempo, Tribal...</p>
          <Shelve />
          <Shelve />
          <p>Bass music, other genres</p>
          <Shelve />
          <Shelve />
          
          

          





         
          
          
          </div>
          
          
        </div>
    );
}
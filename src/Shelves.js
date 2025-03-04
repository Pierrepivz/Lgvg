import Shelve from "./Shelve.js";
import Shelve2 from "./Shelve2.js";

export default function Shelves(){
    return (
        <div class="shelves_container">

          <div class="row" id="text">
            <p id="intro">"Enter the diggin portal .... your introduction phrase" </p>
            
            <button class="distro">Our distribution (for record shops)</button>
          </div>
          <div class="shelve_presentation">
           
          <p class="name_display" id="house_display">HOUSE</p><p class="name_display" id="techno_display">TECHNO</p><p class="name_display" id="acidjazz_display">ACID-JAZZ</p>
            <p class="name_display" id="hiphouse_display">HIP-HOUSE</p><p class="name_display" id="indierock_display">INDIE ROCK</p><p class="name_display" id="house2011_now_display">HOUSE 2011 NOW</p>
            <p class="name_display" id="italohouse_display">ITALO HOUSE</p>
            <div class="description">
            <p class="name_display" id="house_description">Dérivé de la House et ancêtre de la Trance. Ce genre voit le jour à Chicago dans les années 1980 et se caractérise par l’utilisation d’une basse analogique créée à partir du synthétiseur-séquenceur Roland TB-303.
            </p>
          </div></div> 

          <div class="row" id="selection">


          

          <Shelve />
          <Shelve2 />
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
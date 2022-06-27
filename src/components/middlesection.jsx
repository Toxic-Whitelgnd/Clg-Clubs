import React from "react";
import "../styles/middlesection.css"
import Home from "../pages/home";
import {Link} from 'react-scroll'
import AvailableClub from "../pages/availableclubs";
import Club from "../pages/club";
import CreateClubs from "../pages/createclub";
import Aboutus from "../pages/aboutus"

export default function MiddleComponent(){
    return(
        <>
        {/* home settings */}
        <div id="home">
          <Home />  
        </div>
        {/* clubs settings */}
        <div id="club">
          <Club />
        </div>
        
        {/* avaliable clus settings */}
        <div id="availableclub">
              <AvailableClub />
        </div>
     
        <div id="HowTocreate">
          <CreateClubs />
        </div>
        <div id="aboutus"> 
          <Aboutus />


        </div>
        
        </>
    )
}
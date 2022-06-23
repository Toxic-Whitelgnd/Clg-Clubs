import React from "react";
import "../styles/navbar.css"
import Home from "../pages/home";
import {Link} from 'react-scroll'
import AvailableClub from "../pages/availableclubs";

export default function MiddleComponent(){
    return(
        <>
        {/* home settings */}
        <div id="home">
          <Home />  
        </div>
        {/* avaliable clus settings */}
        <div id="availableclub">
              <AvailableClub />
        </div>
        
        </>
    )
}
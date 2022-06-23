import React from "react";
import "../styles/navbar.css"
import Home from "../pages/home";
import {Link} from 'react-scroll'

export default function MiddleComponent(){
    return(
        <>
          <div id="home">

          <Home />

        </div>
        
        </>
    )
}
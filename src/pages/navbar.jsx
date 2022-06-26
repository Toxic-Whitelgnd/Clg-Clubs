import React from "react";
import {Link} from "react-scroll"
import "../styles/navbar.css"

export default function NavBarComp(){
    return(
        <>

        
        <div className="navBar">
        <div className="header">
            <h1>HelloMf</h1>
        </div>
                <ul className="navContent">
                    <li className="nav-text"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                    <li className="nav-text"><Link to="club" spy={true} smooth={true}>Club</Link></li>
                    <li className="nav-text"><Link to="availableclub" spy={true} smooth={true}>AvailableClub</Link></li>   
                    <li className="nav-text"><Link to="HowTocreate" spy={true} smooth={true}>CreateClubs</Link></li>
                    <li className="nav-text"><Link to="about" spy={true} smooth={true}>Aboutus</Link></li>
                </ul>
            </div>
        </>
    );
}
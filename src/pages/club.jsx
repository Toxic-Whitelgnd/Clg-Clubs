import React from "react";
import "../styles/club.css"
import * as Biico from "react-icons/bi"
import * as Siico from "react-icons/si"
import * as Diico from "react-icons/di"
import * as Mdico from "react-icons/md"
import mb from "../images/mbandt.png"
import esport from "../images/esports.png"

export default function Club(){
    return(
        <>
        <div className="clubHeader">
            <h1>clubs</h1>

        </div>
        <div className="clubcard">
            {/* for music */}
            <div className="cards">
                <div className="circle">
                   <Biico.BiMusic className="music"/>
                </div>

                <div className="content">
                    <h2>Music</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                     text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book. 
                     <a href="#">Explore</a>
                    </p>
                </div>
                <img src={mb} alt="musciband" className="musicb"></img>
            </div>
            {/* for dance */}
            <div className="cards">
                <div className="circle">
                   <Siico.SiBytedance className="dance"/>
                </div>

                <div className="content">
                    <h2>Dance</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                     text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book. 
                     <a href="#">Explore</a>
                    </p>
                </div>
                <img src="https://data.whicdn.com/images/205455629/original.gif" alt="danceband" className="danceb"></img>
            </div>
            {/* for coding */}
            <div className="cards">
                <div className="circle">
                   <Diico.DiCode className="code"/>
                </div>

                <div className="content">
                    <h2>Coding</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                     text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book. 
                     <a href="#">Explore</a>
                    </p>
                </div>
                <img src="https://c.tenor.com/AlUkiGkR2j8AAAAM/new-game-ahagon-umiko-programming.gif" alt="codeband" className="codeb"></img>
            </div>
            {/* for e-sports */}
            <div className="cards">
                <div className="circle">
                   <Mdico.MdSportsEsports className="esport"/>
                </div>

                <div className="content">
                    <h2>E-sports</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                     text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book. 
                     <a href="#">Explore</a>
                    </p>
                </div>
                <img src={esport} alt="esportband" className="esportb"></img>
            </div>
        </div>
        
        </>
    )
}

// https://data.whicdn.com/images/205455629/original.gif

// https://thumbs.gfycat.com/FatalArtisticIndiancow-max-1mb.gif

// https://c.tenor.com/AlUkiGkR2j8AAAAM/new-game-ahagon-umiko-programming.gif - coding
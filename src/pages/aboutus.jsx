import React from "react";
import * as Sico from "react-icons/si";
import * as aico from "react-icons/ai";
import "../styles/aboutus.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Aboutus(){
    return(
        <>
        <div className="footercontent">

        <div className="likebtn">   
        <label class="like">
            <input type="checkbox"/>
            <div class="hearth"/>
        </label>
        </div>
        <div className="icons">
            {/* Facebook */}
            <a href="https://www.facebook.com/TheBestBrotherEver/">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fbicon"><Sico.SiFacebook /></span>
                </div>
                <div className="text">Facebook/tarun</div>

            </a>
            {/* InstaGram */}
            <a href="https://www.instagram.com/t_a_r_u_n_s_k_/">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="instaicon"><Sico.SiInstagram /></span>
                </div>
                <div className="text">@t_a_r_u_n_s_k</div>

            </a>
            {/* github */}
            <a href="https://github.com/Toxic-Whitelgnd">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="giticon"><Sico.SiGithub/></span>
                </div>
                <div className="text">Toxic-Whitelgnd</div>

            </a>
            {/* Linked in */}
            <a href=" https://www.linkedin.com/in/tarun-s-k-737349207/"> 
    
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="linicon"><Sico.SiLinkedin/></span>
                </div>
                <div className="text">Tarun S K</div>

            </a>
            {/* email */}
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="emicon"><aico.AiOutlineMail/></span>
                </div>
                <div className="text">darklgnd100@gmail.com</div>

            </a>



        </div>

        

        <div className="madeby">
            <h5>Made By 💗 Tarun  © copyright 2022</h5>
        </div>
        
        </div> 
        
        </>
    )
}
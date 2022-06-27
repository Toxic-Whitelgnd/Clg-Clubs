import React from "react";
import "../styles/createclub.css"
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


export default function CreateClubs(){
    return(
        <>
        

        <div className="Container">
            <div className="bubbles">
            <div className="ccHeader">

                <h2>Want to Dispaly Your Club?</h2>

            </div>  
           
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"12"}}></span>
                <span style={{"--i":"24"}}></span>
                <span style={{"--i":"10"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"16"}}></span>
                <span style={{"--i":"19"}}></span>
                <span style={{"--i":"20"}}></span>
                <span style={{"--i":"22"}}></span>
                <span style={{"--i":"25"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"21"}}></span>
                <span style={{"--i":"15"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"26"}}></span>
                <span style={{"--i":"17"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"12"}}></span>
                <span style={{"--i":"24"}}></span>
                <span style={{"--i":"10"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"16"}}></span>
                <span style={{"--i":"19"}}></span>
                <span style={{"--i":"20"}}></span>
                <span style={{"--i":"22"}}></span>
                <span style={{"--i":"25"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"21"}}></span>
                <span style={{"--i":"15"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"26"}}></span>
                <span style={{"--i":"17"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"18"}}></span>
           
            </div>
        </div>
        <div className="stepscontainer">
            <Popup trigger={<button className="cst-btn"> Step-1 </button>} position="right center">
            <div className="s1content">It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less 
                 normal distribution of letters.</div>
            
            </Popup>
            <Popup trigger={<button className="cst-btn2"> Step-2 </button>} position="right center">
            <div className="s2content">It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less 
                 normal distribution of letters.</div>
            
            </Popup>
            <Popup trigger={<button className="cst-btn3"> Step-3 </button>} position="right center">
            <div className="s3content">It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less 
                 normal distribution of letters.</div>
            
            </Popup>
            <Popup trigger={<button className="cst-btn4"> Step-4 </button>} position="right center">
            <div className="s4content">It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less 
                 normal distribution of letters.</div>
            
            </Popup>
        </div>
  
        </>
    )
}

{/* <span style="--i:11"></span>
<span style="--i:14"></span>
<span style="--i:19"></span>
<span style="--i:24"></span> */}


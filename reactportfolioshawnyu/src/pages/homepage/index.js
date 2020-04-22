import React, { useEffect, useState } from "react";
import Gitlogo from "./Gitlogo.png";
import selfportrait from "./selfportrait.jpg";
import CVlogo from "./CVlogo.png";
import linkednlogo from "./linkednlogo.png";

import "./Style.css"

const HomePage =()=>{


const[imageDisplay, setimageDisplay]=useState(
    "invisible"

)
const[informationDisplay, setInformationDisplay]=useState(
    "invisible"
)
const[linksDisplay1, setLinkDisplay1]=useState(
    "invisible"
)
const[linksDisplay2, setLinkDisplay2]=useState(
    "invisible"
)
const[linksDisplay3, setLinkDisplay3]=useState(
    "invisible"
)


function activateInfo(){

        setimageDisplay("Visible");
        setTimeout(() => {
         setInformationDisplay("Visible")  
            }, 400);
        setTimeout(() => {
            setLinkDisplay1("visible")
        }, 800);
        setTimeout(()=>{
        setLinkDisplay2("visible")
        }, 1200);
        setTimeout(()=>{
            setLinkDisplay3("visible")
            }, 1600)

    
} 

  return (
  <div>
      <div className="row">
      <div className= "offset-md-3 redsquare"  onClick={activateInfo}>
      <img className = {"profileImage "+(imageDisplay==="invisible"? 'sleep':'activate' )}src={selfportrait} alt="portrait"></img>
          </div>
          <div className = {"information profileInformation " + (informationDisplay==="invisible"?"sleep":"activate" )}>
          <p>Shawn Yu is a full-stack developer from teh east coast of the united States, he like to read and listen to  audiobooks</p>
          </div>
          <div className= "profileLinks" >
              <div className ={"linkIcon "+(linksDisplay1==="invisible"?"sleep":"activate")}>
              <a href="https://github.com/ShawnWhy/VicountofSandwich/archive/master.zip" download><img src={CVlogo}></img></a>

              </div>
              <div className ={"linkIcon "+(linksDisplay2==="invisible"?"sleep":"activate")}>
              <a href="https://github.com/ShawnWhy" ><img src={Gitlogo} alt="git logo"></img></a>
                </div>
              <div className ={"linkIcon "+(linksDisplay3==="invisible"?"sleep":"activate")}>
              <a href="https://www.linkedin.com/in/shawn-yu-4377b411/"><img src={linkednlogo} alt={"linkedin logo"}></img></a>

              </div>


          </div>
     </div>
     </div>


  
    )
  }
 
export default HomePage;
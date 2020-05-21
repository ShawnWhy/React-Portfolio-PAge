import React, { useEffect, useState } from "react";
import Gitlogo from "./SVG/github.svg";
import selfportrait from "./selfportrait.jpg";
import CVlogo from "./SVG/resume.svg"
import linkednlogo from "./SVG/linkedin.svg"
import handlebarIcon from "./SVG/handlebars.svg";
import expressIcon from "./SVG/express.svg";
import html6Icon from "./SVG/html6.svg";
import javascriptIcon from "./SVG/javascript.svg";
import mongodbIcon from "./SVG/mongodb.svg";
import nodeJsBlackIcon from "./SVG/nodejsblack.svg";
import reactIcon from "./SVG/react.svg";
import "./Style.css"
import resume from "./resume.pdf"

const HomePage =()=>{
const [display, SetDisplay]=useState(
    ""
)
const [displayDiv, setDisplayDiv]=useState(
    "invisibleDisplayDiv"
    

) 
const [skillsContainer, setSkillsContainer]=useState(
    "invisibleSkills"
)
const skillsArray = [
    {name:"React",
    icon :reactIcon},
    {name:"Express",
    icon:expressIcon},
    {name:"Javascript",
    icon:javascriptIcon},
    {name:"mongoDB",
    icon:mongodbIcon},
    {name:"NodeJs",
    icon:nodeJsBlackIcon},
    {name:"HandleBars",
    icon:handlebarIcon},

]
const[jumpingSquare, setJumpingSquare]=useState(
    "jumpUp"
)
const[frame, setFrame]=useState(
    "emptyFrame"
)
const[bar, setBar]=useState(
    {
    one:"invisible",
    two:"invisible"
    }
)

const[blackIcon, setBlackIcon]=useState(
    {one:"blackIcon",
    two:"blackIcon",
    three:"blackIcon"

    }
)

    

const[imageDisplay, setimageDisplay]=useState(
    "invisible"

)
const[informationDisplay, setInformationDisplay]=useState(
    "invisible"

)

const[linkDisplay, setLinkDisplay]=useState(
    { one:"invisible",
    two: "invisible",
    three: "invisible",
    
    }
)

const handleHover=function(event){
    event.preventDefault();
    event.stopPropagation();
    var targetName = event.target.getAttribute("name");
    
    
    SetDisplay(targetName)
    setTimeout(() => {
        SetDisplay("")
        
    }, 500);
}


function activateInfo(){
    setJumpingSquare("rest");
    setFrame("visibleFrame")

        setimageDisplay("Visible");
        setTimeout(() => {
            setBar({...bar, one:"bar"})
            
        }, 1200);
        setTimeout(() => {
         setInformationDisplay("Visible")  
            }, 400);
        setTimeout(() => {
            setLinkDisplay({...linkDisplay, one:"Visible"})  
        }, 1400);
        setTimeout(()=>{
        setLinkDisplay({...linkDisplay,one:"Visible", two:"Visible"})  
        }, 1800);
        setTimeout(()=>{
            setLinkDisplay({...linkDisplay,one:"Visible", two:"Visible", three:"Visible"})  
            }, 2000)
            setTimeout(() => {
                setBar({...bar, one:"bar",two:"bar"})
            },1200)
            setTimeout(() => {
                setSkillsContainer(
                    "visibleSkills")
                
            }, 2200);
           
            setDisplayDiv(
                "visibleDisplayDiv"
            )
            
        

    
} 

  return (
  
      <div >
          <div className="profileContainer">
      <div className= {" redsquare "+ jumpingSquare} onClick={activateInfo}><h2 className={(imageDisplay==="invisible"?"Xappear":"Xdissapear")}>X</h2>
      <img className = {"profileImage "+(imageDisplay==="invisible"? 'sleep':'activate' )}src={selfportrait} alt="portrait"></img>
          </div>
          <div className = {(informationDisplay==="invisible"?"sleep ":"activate bio "+frame )}>
          <p>Shawn Yu is a full-stack developer from the east coast of the united States, he is a former commercial artist and university art teacher; he likes to read and listen to  audiobooks</p>
          </div>
          </div>
          <div className={bar.one}></div>
          <div className="profileLinks row" >
              
              
              <div  className={"linkpic "+(linkDisplay.one==="invisible"? "sleep":"activate")}>
              <a href={resume} download><img name="download resume" src={CVlogo} onMouseOver={handleHover}></img></a>

              </div>
              <div className={"linkpic "+(linkDisplay.two==="invisible"? "sleep":"activate")}   >
              <a href="https://github.com/ShawnWhy" ><img name="github account"  src={Gitlogo} alt="git logo" onMouseOver={handleHover}></img></a>
                </div>
              <div className={"linkpic "+(linkDisplay.three==="invisible"? "sleep":"activate")} onMouseOver={handleHover}>
              <a href="https://www.linkedin.com/in/shawn-yu-4377b411/"><img   name="linkedin account"  src={linkednlogo} alt={"linkedin logo"} onMouseOver={handleHover}></img></a>

              </div>
            </div>
            <div className={bar.two}></div>
            <div className={skillsContainer}>
                <div><p>{"skills: "}</p></div>
            {skillsArray.map(skill => {
               return (
                 <div key={skill.name}className="skillIcon"><img  name= {skill.name}  src={skill.icon} onMouseOver={handleHover}></img></div>
               );
             })}
            </div>
            <div className={ displayDiv}>{display}</div>
            <div className="footer"></div>

          
     </div>
  
     


  
    )
  }
 
export default HomePage;
import React, { useEffect, useState } from "react";
import weathericon from "./weathericon.png";
import moviemagic from "./moviemagic.png";
import burger from "./burger.png";
import meshicon from "./meshicon.png";
import lingoicon from "./lingolabslogo.PNG"
import "./Style.css"

//makes the icon work
const PortfolioPage = function(){
    const[iconAction, setIconAction]=useState(
        {
        one:"rest",
        two:"rest",
        three:"rest",
        four:"rest"
        }
    )
//make image background appear
const[imageState, setImageState]=useState(
        {
        one:"imageInvisible",
        two:"imageInvisible",
        three:"imageInvisible",
        four:"imageInvisible",
        }
    )
// sets the description of the webpage and pops it ro the right
const[descriptionState, setDescriptionState]=useState(
        {
        one:"descriptionInvisible",
        two:"descriptionInvisible",
        three:"descriptionInvisible",
        four:"descriptionInvisible",
        }
    )
//triggers the animation for all of the information for each of the projects
const handleClick = function(event){
        event.preventDefault();
        event.stopPropagation();
        var name=event.target.getAttribute("name");
         //push the div clicked on forward
        setIconAction(
            {...iconAction,one:"rest",two:"rest",three:"rest",four:"rest", [name]:"deployed"}
        );
        //make the icon in the div appear for the one clicked on
        setImageState({...imageState,one:"imageInvisible",two:"imageInvisible",three:"imageInvisible",four:"imageInvisible ",[name]:"image"+name})
        
        //make the description appear
        setTimeout(()=>{
            setDescriptionState({...descriptionState,one:"descriptionInvisible",two:"descriptionInvisible",three:"descriptionInvisible",four:"descriptionInvisible", [name]:"descriptionVisible"})
        },100)

        
    }


return(
    <div className="totalContainer">
        <div className="rowContainer">
        <div name="one" className={iconAction.one } onClick={handleClick}>
            <div className={imageState.one}></div>
        </div>
        <div className={ descriptionState.one }>
            <a href="http://leonorasgamingroom.herokuapp.com/">
                <p className="linkText">Lady Leonora's Opposite Poetry Room</p></a>
                <a  href="https://github.com/ShawnWhy/Lady-Leonoras-Game-Table-two">
                <p className = "githubLink">github</p> 
                </a>
            <p>a collaborative poetry creation app created to assist in a university poetry class; created with React.js and Socket.io</p>
            </div>
        </div>

        <div className="rowContainer">
        <div name="two" className={iconAction.two} onClick={handleClick}>
        <div className={imageState.two}></div>
        </div>
        <div className={ descriptionState.two}>
            <a href="https://infinite-inlet-20359.herokuapp.com">
            <p className="linkText">Movie Magic</p></a>
            <a  href="https://github.com/ShawnWhy/movie-magic-Shawn">
                <p className = "githubLink">github</p> 
                </a>
                <p>an App that finds movie-viewing buddies and suggest movies to a user; created with MySql, passport, and axios</p>
            </ div>
        </div>

        <div className="rowContainer">
        <div name="three" className={iconAction.three} onClick={handleClick}>
        <div className={imageState.three}></div>
        </div>
        <div className={ descriptionState.three}>
            <a href="https://viscount-of-sandwich.herokuapp.com/">
                <p className="linkText">Viscount of Sandwich</p>
                </a>
                <a  href="https://github.com/ShawnWhy/VicountofSandwich">
                <p className = "githubLink">github</p> 
                </a>
                <p>a sandwich creation app made with MySql and  Handlebars</p>
                </div>
        </div>

        <div className="rowContainer">
        <div name="four" className={iconAction.four} onClick={handleClick}>
        <div className={imageState.four}></div>
        </div>
        <div className={ descriptionState.four}>
            <a href="https://ghazalpoetryroom.herokuapp.com/">
                <p className="linkText">Ghazal Poetry Room</p>
                </a>
                <a  href="https://github.com/ShawnWhy/Ghazal_Poetry_Room">
                <p className = "githubLink">github</p> 
                </a>
                 <p>a collaborative poetry creation app created to assist in a university poetry class; created with React.js and Socket.io</p>
                </div>
        </div>
        
    </div>
)}
export default PortfolioPage;

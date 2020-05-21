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
        {one:"rest",
        two:"rest",
        three:"rest",
        four:"rest"

    }
    )
    //make image background appear
    const[imageState, setImageState]=useState(
        {one:"imageInvisible",
        two:"imageInvisible",
        three:"imageInvisible",
        four:"imageInvisible",}
    )
    // sets the description of the webpage and pops it ro the right
    const[descriptionState, setDescriptionState]=useState(
        {one:"descriptionInvisible",
        two:"descriptionInvisible",
        three:"descriptionInvisible",
        four:"descriptionInvisible",}
    )
    const handleClick = function(event){
        event.preventDefault();
        event.stopPropagation();
        var name=event.target.getAttribute("name");
        console.log(name);
        setIconAction({...iconAction,one:"rest",two:"rest",three:"rest",four:"rest", [name]:"deployed"}

        
        );
        setImageState({...imageState,one:"imageInvisible",two:"imageInvisible",three:"imageInvisible",four:"imageInvisible ",[name]:"image"+name})

        setTimeout(()=>{
            setDescriptionState({...descriptionState,one:"descriptionInvisible",two:"descriptionInvisible",three:"descriptionInvisible",four:"descriptionInvisible", [name]:"descriptionVisible"})
        },100)

        
    }
//     useEffect(
//         function(){
        
            
//         setTimeout(() => {
//             setIconAction({...iconAction, one:"jumpUp"})
//       },0)
//       setTimeout(() => {
//           setIconAction({...iconAction, one:"jumpUp",two:"jumpUp"})
//     },100)
//     setTimeout(() => {
//       setIconAction({...iconAction, one:"jumpUp",two:"jumpUp",three:"jumpUp"})
// },150)
// setTimeout(() => {
//   setIconAction({...iconAction, one:"jumpUp",two:"jumpUp",three:"jumpUp",four:"jumpUp"})
// },200)
        
        
//    } ,[]
//     )
    

return(
    <div className="totalContainer">
        <div className="rowContainer">
        <div name="one" className={iconAction.one } onClick={handleClick}>
            <div className={imageState.one}></div>
        </div>
        <div className={ descriptionState.one }>
            <a href="https://howarddaniels.github.io/the-daily-mesh/news.html">
                <p className="linkText">The Daily Mesh</p></a>
                <a  href="https://github.com/HowardDaniels/the-daily-mesh">
                <p className = "githubLink">github</p> 
                </a>
            <p>a website featuring news, stocks and weatherupdates, created with axios and moments.js</p>
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
            <a href="https://shawnyulingolabsmaster.herokuapp.com/">
                <p className="linkText">Lingo Labs</p>
                </a>
                <a  href="https://github.com/ShawnWhy/LingoLabs">
                <p className = "githubLink">github</p> 
                </a>

                <p>a full MERN web application designed to let customers purchase and download custom websites</p>
                </div>
        </div>
        
        





    </div>





)



}

export default PortfolioPage;
